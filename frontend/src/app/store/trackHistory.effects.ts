import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HelpersService} from "../services/helpers.service";
import {Store} from "@ngrx/store";
import {AppState} from "./types";
import {loginUserFailure, loginUserRequest, loginUserSuccess} from "./users.actions";
import {mergeMap, tap} from "rxjs";
import {map} from "rxjs/operators";
import {sendTrackHistoryFailure, sendTrackHistoryRequest, sendTrackHistorySuccess} from "./trackHistory.actions";
import {TrackHistoryService} from "../services/track-history.service";


@Injectable()

export class TrackHistoryEffects {

  constructor(
    private actions: Actions,
    private trackHistoryService: TrackHistoryService,
    private router: Router,
    private snackbar: MatSnackBar,
    private helpers: HelpersService,
    private store: Store<AppState>
  ) {}



  //
  // sendTrackHistory = createEffect(() => this.actions.pipe(
  //   ofType(sendTrackHistoryRequest),
  //   mergeMap(({trackHistoryData})=> this.trackHistoryService.sendTrackHistory(trackHistoryData).pipe(
  //     map(trackHistory => sendTrackHistorySuccess({trackHistory})),
  //     tap(()=> {
  //       this.helpers.catchServerError(sendTrackHistoryFailure)
  //     })
  //   ))
  //
  //
  // ))



}
