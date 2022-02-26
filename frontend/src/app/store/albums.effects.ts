import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {fetchAlbumsFailure, fetchAlbumsRequest, fetchAlbumsSuccess} from "./albums.actions";
import {AlbumsService} from "../services/albums.service";

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



  constructor(
    private actions: Actions,
    private albumsService: AlbumsService,
  ) {}
}
