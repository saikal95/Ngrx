import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiArtistData, Artist} from "../models/artist.model";
import {map} from "rxjs";
import {Album, ApiAlbumData} from "../models/album.model";

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
          );
        });
      })
    );
  }

}
