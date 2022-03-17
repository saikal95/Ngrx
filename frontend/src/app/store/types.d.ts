import { Artist } from '../models/artist.model';
import {Album} from "../models/album.model";
import {LoginError, RegisterError, User} from "../models/user.model";


export type ArtistsState = {
  artists: Artist[],
  fetchLoading: boolean,
  fetchError: null | string,
};

export type AppState = {
  artists: ArtistsState
  users: UsersState
}

export type AlbumsState = {
  albums: Album[],
  fetchLoading: boolean,
  fetchError: null | string,
};

export type AppStateAlbum = {
  albums: AlbumsState
}

export type UsersState = {
  user: null | User,
  registerLoading: boolean,
  registerError: null | RegisterError,
  loginLoading: boolean,
  loginError: null | LoginError,

}



