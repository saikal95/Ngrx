import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment, environment as env} from "../../environments/environment";
import {TrackHistory, TrackHistoryData} from "../models/trackHistory.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrackHistoryService {

  constructor(private http: HttpClient) { }


  sendTrackHistory(trackHistory: TrackHistory) {
    return this.http.post(env.apiUrl + '/trackHistory', trackHistory);
  }




  getTrackHistory() {
    return this.http.get<TrackHistoryData[]>(environment.apiUrl + '/trackHistory').pipe(
      map(response => {
        return response.map(trackHistoryData => {
          return new TrackHistoryData(
            trackHistoryData._id,
            trackHistoryData.user,
            trackHistoryData.track,
          );
        });
      })
    );
  }
}
