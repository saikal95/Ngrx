import {createReducer, on} from "@ngrx/store";
import {TracksHistoryState} from "./types";
import {sendTrackHistoryFailure, sendTrackHistoryRequest, sendTrackHistorySuccess} from "./trackHistory.actions";
import {Track} from "../models/track.model";

const  initialState : TracksHistoryState = {
  trackHistory: [],
  fetchLoading: false,
  fetchError: <null | string>null,

}

export const trackHistoryReducer = createReducer(
  initialState,
  on(sendTrackHistoryRequest, state=> ({...state, fetchLoading: true, fetchError: null})),
  on(sendTrackHistorySuccess, (state, {trackHistory}) => ({
    ...state,
    fetchLoading: false,
    trackHistory
  })),
  on(sendTrackHistoryFailure, (state, { error })=> ({
      ...state,
      fetchLoading: false,
      fetchError: error
    })
  ),



)
