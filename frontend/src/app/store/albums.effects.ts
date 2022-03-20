import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {
  createAlbumFailure,
  createAlbumRequest,
  createAlbumSuccess,
  fetchAlbumsFailure,
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




  constructor(
    private actions: Actions,
    private albumsService: AlbumsService,
    private router: Router
  ) {}
}
