import { Artist } from '../models/artist.model';
import {Album} from "../models/album.model";
import {RegisterError, User} from "../models/user.model";
import {UsersService} from "../services/users.service";

export type ArtistsState = {
  artists: Artist[],
  fetchLoading: boolean,
  fetchError: null | string,
};

export type AppState = {
  artists: ArtistsState
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
  registerError: null | RegisterError

}

export type AppStateUser = {
  users: UsersState
}



