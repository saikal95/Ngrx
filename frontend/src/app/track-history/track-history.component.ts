import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Track} from "../models/track.model";
import {Store} from "@ngrx/store";
import {AppState} from "../store/types";
import {ActivatedRoute} from "@angular/router";
import {fetchTracksRequest} from "../store/tracks.actions";
import {TrackHistory} from "../models/trackHistory.model";
import {fetchTrackHistoryRequest} from "../store/trackHistory.actions";

@Component({
  selector: 'app-track-history',
  templateUrl: './track-history.component.html',
  styleUrls: ['./track-history.component.sass']
})
export class TrackHistoryComponent implements OnInit {

  trackHistory: Observable<TrackHistory[]>
  loading: Observable<boolean>
  error: Observable<null | string>

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.trackHistory = store.select(state => state.trackHistory.trackHistory);
    this.loading = store.select(state => state.tracks.fetchLoading);
    this.error = store.select(state => state.tracks.fetchError);
  }



  ngOnInit(): void {
    console.log(this.trackHistory);
    this.store.dispatch(fetchTrackHistoryRequest());
  }

}
