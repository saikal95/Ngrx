import { createAction, props } from '@ngrx/store';
import {Album, AlbumData} from "../models/album.model";



export const fetchAlbumsRequest = createAction('[Album] Fetch Request',
  props<{id: string}>()
  );

export const fetchAlbumsSuccess = createAction(
  '[Albums] Fetch Success',
  props<{albums: Album[]}>()
);
export const fetchAlbumsFailure = createAction(
  '[Albums] Fetch Failure',
  props<{error: string}>()
);

export const createAlbumRequest = createAction(
  '[Albums] Create Album',
  props<{albumData: AlbumData}>()
);
export const createAlbumSuccess = createAction(
  '[Albums] Create Success'
);
export const createAlbumFailure = createAction(
  '[Albums] Create Failure',
  props<{error: string}>()
);


export const fetchAlbumsForTrRequest = createAction('[Albums] Fetch Request');
export const fetchAlbumsForTrSuccess = createAction(
  '[Albums] Fetch Success',
  props<{albums: Album[]}>()
);
export const fetchAlbumsForTrFailure = createAction(
  '[Albums] Fetch Failure',
  props<{error: string}>()
);

