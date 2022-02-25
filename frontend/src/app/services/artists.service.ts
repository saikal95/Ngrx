import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiArtistData, Artist} from "../models/artist.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get<ApiArtistData[]>(environment.apiUrl + '/artists').pipe(
      map(response => {
        return response.map(artistData => {
          return new Artist(
            artistData._id,
            artistData.title,
            artistData.image,
            artistData.information,
          );
        });
      })
    );
  }




}
