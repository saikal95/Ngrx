import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {registerUserFailure, registerUserRequest, registerUserSuccess} from "./users.actions";
import {mergeMap, tap, catchError, of} from "rxjs";
import {map} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";


@Injectable()

export class UsersEffects {

  constructor(
    private actions: Actions,
    private usersService: UsersService,
    private router: Router,
    private snackbar: MatSnackBar
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




}
