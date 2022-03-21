import {createReducer, on} from "@ngrx/store";
import {TracksState} from "./types";
import {
  createTrackFailure,
  createTrackRequest,
  createTrackSuccess,
  fetchTracksFailure,
  fetchTracksRequest,
  fetchTracksSuccess
} from "./tracks.actions";
import {TrackHistory} from "../models/trackHistory.model";
import {Track} from "../models/track.model";
import {createAlbumFailure, createAlbumRequest, createAlbumSuccess} from "./albums.actions";


const  initialState : TracksState = {
  tracks: [],
  oneTrack: null,
  fetchLoading: false,
  fetchError: <null | string>null,
  createLoading: false,
  createError: null,
}

export const tracksReducer = createReducer(
  initialState,

  on(fetchTracksRequest, state => ({...state, fetchLoading: true})),
  on(fetchTracksSuccess, (state, {tracks}) => ({
    ...state,
    fetchLoading: false,
    tracks
  })),
  on(fetchTracksFailure, (state, {error}) => ({
    ...state,
    fetchLoading: false,
    fetchError: error,
  })),
  on(createTrackRequest, state => ({...state, createLoading: true})),
  on(createTrackSuccess , state => ({...state, createLoading: false})),
  on(createTrackFailure, (state, {error}) => ({
    ...state,
    createLoading: false,
    createError: error,
  }))




);
