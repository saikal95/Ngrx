import {createReducer, on} from "@ngrx/store";
import {
  createArtistFailure,
  createArtistRequest,
  createArtistSuccess,
  fetchArtistsFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess
} from "./artists.actions";
import {ArtistsState} from "./types";
import {createAlbumFailure, createAlbumRequest, createAlbumSuccess} from "./albums.actions";

const initialState : ArtistsState = {
  artists: [],
  fetchLoading: false,
  fetchError: <null | string>null,
  createLoading: false,
  createError: null,
}


export const artistsReducer = createReducer(
  initialState,

  on(fetchArtistsRequest, state => ({...state, fetchLoading: true})),
  on(fetchArtistsSuccess, (state, {artists}) => ({
    ...state,
    fetchLoading: false,
    artists
  })),
  on(fetchArtistsFailure, (state, {error}) => ({
    ...state,
    fetchLoading: false,
    fetchError: error,
  })),
  on(createArtistRequest, state => ({...state, createLoading: true})),
  on(createArtistSuccess, state => ({...state, createLoading: false})),
  on(createArtistFailure, (state, {error}) => ({
    ...state,
    createLoading: false,
    createError: error,
  }))


);
