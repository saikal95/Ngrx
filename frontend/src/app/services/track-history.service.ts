import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment, environment as env} from "../../environments/environment";
import {ApiTrackHistory, TrackHistory, TrackHistoryData} from "../models/trackHistory.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrackHistoryService {

  constructor(private http: HttpClient) {
  }

  sendTrackHistory(trackHistoryData: TrackHistoryData, token:string ){
    return this.http.post(env.apiUrl + '/trackHistory', trackHistoryData, {
      headers: new HttpHeaders({'Authorization' : token})
    })
  }

  getTrackHistory(id: string, token: string){
    return this.http.get<ApiTrackHistory[]>(environment.apiUrl + '/trackHistory', {
      headers: new HttpHeaders({'Authorization': token})
    }).pipe(
      map(response => {
        return response.map(trackHistoryData => {
          return new TrackHistory(
            trackHistoryData._id,
            trackHistoryData.user,
            trackHistoryData.track,
            trackHistoryData.artist,
            trackHistoryData.dateTime,
            trackHistoryData.token,
          );
        });
      })
    );
  }
}

