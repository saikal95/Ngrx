import { Artist } from '../models/artist.model';
import {Album} from "../models/album.model";

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
