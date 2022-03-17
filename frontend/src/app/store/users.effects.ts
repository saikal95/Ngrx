import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess, logoutUser, logoutUserRequest,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess
} from "./users.actions";
import {mergeMap, tap, catchError, of, NEVER, withLatestFrom} from "rxjs";
import {map} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {HelpersService} from "../services/helpers.service";
import {Store} from "@ngrx/store";
import {AppState} from "./types";


@Injectable()

export class UsersEffects {

  constructor(
    private actions: Actions,
    private usersService: UsersService,
    private router: Router,
    private snackbar: MatSnackBar,
    private helpers: HelpersService,
    private store: Store<AppState>
  ) {}

  registerUser = createEffect(()=> this.actions.pipe(
    ofType(registerUserRequest),
    mergeMap(({userData}) => this.usersService.registerUser(userData).pipe(
      map(user => registerUserSuccess({user})),
      tap(()=> {
        this.snackbar.open('Register successful', 'Ok', {duration : 3000});
         void this.router.navigate(['/']);
   }),
     catchError(regErr=> {
       let registerError = null;
       if(regErr instanceof  HttpErrorResponse && regErr.status === 400){
         registerError = regErr.error;

       }else {
         this.snackbar.open('Server error', 'OK', {duration: 5000});
       }

       return of(registerUserFailure({error: registerError}));

     })
    ))
  ))

  loginUser = createEffect(() => this.actions.pipe(
    ofType(loginUserRequest),
    mergeMap(({userData}) => this.usersService.login(userData).pipe(
      map(user => loginUserSuccess({user})),
      tap(() => {
        this.helpers.openSnackbar('Login successful');
        void this.router.navigate(['/']);
      }),
      this.helpers.catchServerError(loginUserFailure)
    ))
  ))

  logoutUser = createEffect(() => this.actions.pipe(
    ofType(logoutUserRequest),
    withLatestFrom(this.store.select(state => state.users.user)),
    mergeMap(([_, user]) => {
      if (user) {
        return this.usersService.logout(user.token).pipe(
          map(() => logoutUser()),
          tap(() => this.helpers.openSnackbar('Logout successful'))
        );
      }

      return NEVER;
    }))
  )






}
