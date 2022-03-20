import { createAction, props } from '@ngrx/store';
import {Artist, ArtistData} from '../models/artist.model';
import {AlbumData} from "../models/album.model";

export const fetchArtistsRequest = createAction('[Artists] Fetch Request');

export const fetchArtistsSuccess = createAction(
  '[Artists] Fetch Success',
  props<{artists: Artist[]}>()
);
export const fetchArtistsFailure = createAction(
  '[Artists] Fetch Failure',
  props<{error: string}>()
);


export const createArtistRequest = createAction(
  '[Artists] Create Artist',
  props<{artistData: ArtistData}>()
);
export const createArtistSuccess = createAction(
  '[Artists] Create Success'
);
export const createArtistFailure = createAction(
  '[Artists] Create Failure',
  props<{error: string}>()
);
