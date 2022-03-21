import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {
  createTrackFailure,
  createTrackRequest,
  createTrackSuccess,
  fetchTracksRequest,
  fetchTracksSuccess
} from "./tracks.actions";
import {TracksService} from "../services/tracks.service";
import {createAlbumSuccess, fetchAlbumsFailure} from "./albums.actions";
import {createArtistFailure, createArtistRequest} from "./artists.actions";
import {Router} from "@angular/router";


@Injectable()
export class TracksEffects {
  constructor(
    private actions: Actions,
    private trackService: TracksService,
    private router: Router,
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


  createTrack = createEffect(()=> this.actions.pipe(
    ofType(createTrackRequest),
    mergeMap(({trackData})=> this.trackService.createTrack(trackData).pipe(
     map(()=> createTrackSuccess()),
     tap(()=> this.router.navigate(['/'])),
      catchError(()=>of(createTrackFailure({error: 'No Track'}))),

  ))
  ))






}
