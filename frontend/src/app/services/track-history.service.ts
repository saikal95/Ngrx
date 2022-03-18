import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as env} from "../../environments/environment";
import {TrackHistoryData} from "../models/trackHistory.model";

@Injectable({
  providedIn: 'root'
})
export class TrackHistoryService {

  constructor(private http: HttpClient) { }


  sendTrackHistory(trackHistoryData: TrackHistoryData) {
    return this.http.post(env.apiUrl + '/trackHistory', trackHistoryData);
  }


}
