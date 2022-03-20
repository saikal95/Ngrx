import {createAction, props} from "@ngrx/store";
import {TrackHistory, TrackHistoryData} from "../models/trackHistory.model";

export const sendTrackHistoryRequest = createAction('[TrackHistory] Register Request',
  props<{trackHistoryData: TrackHistoryData, token: string}>())

export const sendTrackHistorySuccess = createAction('[TrackHistory] Register Success');

export const sendTrackHistoryFailure = createAction('[TrackHistory] Register Failure',
  props<{error: string}>())


export const fetchTrackHistoryRequest = createAction('[TrackHistory] Fetch Request',
  props<{id: string, token: string}>());

export const fetchTrackHistorySuccess = createAction(
  '[TrackHistory] Fetch Success',
  props<{trackHistory: TrackHistory[]}>()
);
export const fetchTrackHistoryFailure = createAction(
  '[TrackHistory] Fetch Failure',
  props<{error: string}>()
);

