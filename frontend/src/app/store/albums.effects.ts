import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {
  createAlbumFailure,
  createAlbumRequest,
  createAlbumSuccess,
  fetchAlbumsFailure, fetchAlbumsForTrFailure, fetchAlbumsForTrRequest, fetchAlbumsForTrSuccess,
  fetchAlbumsRequest,
  fetchAlbumsSuccess
} from "./albums.actions";
import {AlbumsService} from "../services/albums.service";
import {Router} from "@angular/router";

@Injectable()
export class AlbumsEffects {

  fetchAlbums = createEffect(() => this.actions.pipe(
    ofType(fetchAlbumsRequest),
    mergeMap(({id})=> this.albumsService.getAlbums(id).pipe(
      map((albums) => fetchAlbumsSuccess({albums}),
      catchError(()=> of(fetchAlbumsFailure({
        error: 'Something went wrong',
      })))
    ))

  )))

  createAlbum = createEffect(() => this.actions.pipe(
    ofType(createAlbumRequest),
    mergeMap(({albumData}) => this.albumsService.createAlbum(albumData).pipe(
      map(() => createAlbumSuccess()),
      tap(() => this.router.navigate(['/'])),
      catchError(() => of(createAlbumFailure({error: 'Wrong data'})))
    ))
  ));


  fetchAlbumsforTrackks = createEffect(() => this.actions.pipe(
    ofType(fetchAlbumsForTrRequest),
    mergeMap(() => this.albumsService.getAlbumsForTracks().pipe(
      map(albums => fetchAlbumsForTrSuccess ({albums})),
      catchError(() => of(fetchAlbumsForTrFailure ({
        error: 'Albums can not be gotten'
      })))
    ))
  ));




  constructor(
    private actions: Actions,
    private albumsService: AlbumsService,
    private router: Router
  ) {}
}
