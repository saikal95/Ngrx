import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HelpersService} from "../services/helpers.service";
import {Store} from "@ngrx/store";
import {AppState} from "./types";
import {catchError, mergeMap, of, tap} from "rxjs";
import {map} from "rxjs/operators";
import {
  fetchTrackHistoryFailure,
  fetchTrackHistoryRequest,
  fetchTrackHistorySuccess,
  sendTrackHistoryFailure,
  sendTrackHistoryRequest,
  sendTrackHistorySuccess
} from "./trackHistory.actions";
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


  sendTrackHistory = createEffect(() => this.actions.pipe(
    ofType(sendTrackHistoryRequest),
    mergeMap(({trackHistory, token})=> this.trackHistoryService.sendTrackHistory(trackHistory, token).pipe(
      map(() => sendTrackHistorySuccess()),
      tap(()=> {
        this.helpers.catchServerError(sendTrackHistoryFailure)
      })
    ))
  ))


  fetchTrackHistory = createEffect(() => this.actions.pipe(
    ofType(fetchTrackHistoryRequest),
    mergeMap(()=> this.trackHistoryService.getTrackHistory().pipe(
      map((trackHistory) => fetchTrackHistorySuccess({trackHistory}),
        catchError(()=> of(fetchTrackHistoryFailure({
          error: 'Something went wrong',
        })))
      ))

    )))






}
