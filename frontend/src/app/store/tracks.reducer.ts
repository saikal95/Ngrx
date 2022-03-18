import {createReducer, on} from "@ngrx/store";
import {TracksState} from "./types";
import {fetchTracksFailure, fetchTracksRequest, fetchTracksSuccess} from "./tracks.actions";
import {TrackHistory} from "../models/trackHistory.model";
import {Track} from "../models/track.model";


const  initialState : TracksState = {
  tracks: [],
  oneTrack: null,
  fetchLoading: false,
  fetchError: <null | string>null,
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
);
