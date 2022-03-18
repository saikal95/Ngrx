import {createAction, props} from "@ngrx/store";
import {TrackHistory, TrackHistoryData} from "../models/trackHistory.model";

export const sendTrackHistoryRequest = createAction('[TrackHistory] Register Request',
  props<{trackHistory: TrackHistory}>())

export const sendTrackHistorySuccess = createAction('[TrackHistory] Register Success');

export const sendTrackHistoryFailure = createAction('[TrackHistory] Register Failure',
  props<{error: string}>())


export const fetchTrackHistoryRequest = createAction('[TrackHistory] Fetch Request');

export const fetchTrackHistorySuccess = createAction(
  '[TrackHistory] Fetch Success',
  props<{trackHistory: TrackHistoryData[]}>()
);
export const fetchTrackHistoryFailure = createAction(
  '[TrackHistory] Fetch Failure',
  props<{error: string}>()
);

