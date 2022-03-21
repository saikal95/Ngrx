import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import {ApiTrackData, Track, TrackData} from "../models/track.model";
import {AlbumData} from "../models/album.model";

@Injectable({
  providedIn: 'root'
})


export class TracksService {

  constructor(
   private http: HttpClient) { }

  getTracks(albumId: string) {
    return this.http.get<ApiTrackData[]>(environment.apiUrl + '/track?album=' + albumId).pipe(
      map(response => {
        return response.map(trackData => {
          return new Track(
            trackData._id,
            trackData.title,
            trackData.album,
            trackData.duration,
          );
        });
      })
    );
  }

  createTrack(trackData: TrackData) {

    return this.http.post(environment.apiUrl + '/track', trackData);
  }

}
