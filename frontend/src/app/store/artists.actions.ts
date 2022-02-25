import { createAction, props } from '@ngrx/store';
import { Artist } from '../models/artist.model';

export const fetchArtistsRequest = createAction('[Artists] Fetch Request');

export const fetchArtistsSuccess = createAction(
  '[Artists] Fetch Success',
  props<{artists: Artist[]}>()
);
export const fetchArtistsFailure = createAction(
  '[Products] Fetch Failure',
  props<{error: string}>()
);

// export const createProductRequest = createAction(
//   '[Products] Create Request',
//   props<{productData: ProductData}>()
// );
// export const createProductSuccess = createAction(
//   '[Products] Create Success'
// );
// export const createProductFailure = createAction(
//   '[Products] Create Failure',
//   props<{error: string}>()
// );
