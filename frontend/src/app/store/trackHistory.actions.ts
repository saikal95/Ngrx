import {createAction, props} from "@ngrx/store";
import {TrackHistory, TrackHistoryData} from "../models/trackHistory.model";


export const sendTrackHistoryRequest = createAction('[TrackHistory] Register Request',
  props<{trackHistoryData: TrackHistoryData}>())


export const sendTrackHistorySuccess = createAction('[TrackHistory] Register Success',
  props<{trackHistory: TrackHistory[]}>())


export const sendTrackHistoryFailure = createAction('[TrackHistory] Register Failure',
  props<{error: string}>())
