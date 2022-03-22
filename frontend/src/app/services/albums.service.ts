import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import {Album, AlbumData, ApiAlbumData} from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  getAlbums(artistId: string) {
    return this.http.get<ApiAlbumData[]>(environment.apiUrl + '/albums?artist=' + artistId).pipe(
      map(response => {
        return response.map(albumtData => {
          return new Album(
            albumtData._id,
            albumtData.title,
            albumtData.artist,
            albumtData.year,
            albumtData.image,
            albumtData.is_published
          );
        });
      })
    );
  }

  getAlbumsForTracks() {
    return this.http.get<ApiAlbumData[]>(environment.apiUrl + '/albums').pipe(
      map(response => {
        return response.map( albumData => {
          return new Album(
            albumData._id,
            albumData.title,
            albumData.artist,
            albumData.year,
            albumData.image,
            albumData.is_published,
          );
        });
      })
    );
  }



  createAlbum(albumData: AlbumData) {
    const formData = new FormData();

    Object.keys(albumData).forEach(key => {
      if (albumData[key] !== null) {
        formData.append(key, albumData[key]);
      }
    });

    return this.http.post(environment.apiUrl + '/albums', formData);
  }
}
