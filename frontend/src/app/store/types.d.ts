import { Artist } from '../models/artist.model';
import {Album} from "../models/album.model";
import {LoginError, RegisterError, User} from "../models/user.model";
import {Track} from "../models/track.model";
import {TrackHistory, TrackHistoryData} from "../models/trackHistory.model";


export type ArtistsState = {
  artists: Artist[],
  fetchLoading: boolean,
  fetchError: null | string,
  createLoading: boolean,
  createError: null | string,
};

export type AppState = {
  artists: ArtistsState
  users: UsersState
  tracks: TracksState
  trackHistory: TracksHistoryState
  albums: AlbumsState
}

export type AlbumsState = {
  albums: Album[],
  fetchLoading: boolean,
  fetchError: null | string,
  createLoading: boolean,
  createError: null | string,
};


export type TracksState = {
  tracks: Track[],
  oneTrack: Track | null,
  fetchLoading: boolean,
  fetchError: null | string,
};

export type TracksHistoryState = {
  trackHistory: TrackHistory[],
  fetchLoading: boolean,
  fetchError: null | string,
};


export type UsersState = {
  user: null | User,
  registerLoading: boolean,
  registerError: null | RegisterError,
  loginLoading: boolean,
  loginError: null | LoginError,

}



