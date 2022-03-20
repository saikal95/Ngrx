import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ArtistsService} from "../services/artists.service";
import {
  createArtistFailure,
  createArtistRequest,
  fetchArtistsFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess
} from "./artists.actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {createAlbumFailure, createAlbumRequest, createAlbumSuccess} from "./albums.actions";
import {Router} from "@angular/router";

@Injectable()
export class ArtistsEffects {

 fetchArtists = createEffect(() => this.actions.pipe(
   ofType(fetchArtistsRequest),
   mergeMap(()=> this.artistsService.getArtists().pipe(
     map(artists => fetchArtistsSuccess({artists})),
     catchError(()=> of(fetchArtistsFailure({
       error: 'Something went wrong',
     })))
   ))

 ));


  createArtist = createEffect(() => this.actions.pipe(
    ofType(createArtistRequest ),
    mergeMap(({artistData}) => this.artistsService.createArtist(artistData).pipe(
      map(() => createAlbumSuccess ()),
      tap(() => this.router.navigate(['/'])),
      catchError(() => of(createArtistFailure({error: 'No artist'})))
    ))
  ));



  constructor(
    private actions: Actions,
    private artistsService: ArtistsService,
    private router: Router
  ) {}
}
