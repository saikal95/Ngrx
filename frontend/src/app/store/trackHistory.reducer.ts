import {createReducer, on} from "@ngrx/store";
import {TracksHistoryState} from "./types";
import {
  fetchTrackHistoryRequest, fetchTrackHistorySuccess,
  sendTrackHistoryFailure,
  sendTrackHistoryRequest,
  sendTrackHistorySuccess
} from "./trackHistory.actions";
import {Track} from "../models/track.model";
import {fetchAlbumsFailure, fetchAlbumsRequest, fetchAlbumsSuccess} from "./albums.actions";

const  initialState : TracksHistoryState = {
  trackHistory: [],
  fetchLoading: false,
  fetchError: <null | string>null,

}

export const trackHistoryReducer = createReducer(
  initialState,
  on(sendTrackHistoryRequest, state=> ({...state, fetchLoading: true, fetchError: null})),
  on(sendTrackHistorySuccess, (state) => ({
    ...state,
    fetchLoading: false,
  })),
  on(sendTrackHistoryFailure, (state, { error })=> ({
      ...state,
      fetchLoading: false,
      fetchError: error
    })
  ),

  on(fetchTrackHistoryRequest, state => ({...state, fetchLoading: true})),
  on(fetchTrackHistorySuccess, (state, {trackHistory}) => ({
    ...state,
    fetchLoading: false,
    trackHistory
  })),
  on(fetchAlbumsFailure, (state, {error}) => ({
    ...state,
    fetchLoading: false,
    fetchError: error,
  })),


)
