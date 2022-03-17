import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {fetchTracksRequest, fetchTracksSuccess} from "./tracks.actions";
import {TracksService} from "../services/tracks.service";
import {fetchAlbumsFailure} from "./albums.actions";


@Injectable()
export class TracksEffects {
  constructor(
    private actions: Actions,
    private trackService: TracksService,
  ) {}

  fetchTracks = createEffect(() => this.actions.pipe(
    ofType(fetchTracksRequest),
    mergeMap(({id})=> this.trackService.getTracks(id).pipe(
      map((tracks) => fetchTracksSuccess({tracks}),
        catchError(()=> of(fetchAlbumsFailure({
          error: 'Something went wrong',
        })))
      ))

    )))







}
