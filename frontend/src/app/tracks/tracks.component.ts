import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/types";
import {ActivatedRoute} from "@angular/router";
import {Track} from "../models/track.model";
import {fetchTracksRequest} from "../store/tracks.actions";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.sass']
})
export class TracksComponent implements OnInit {

  tracks: Observable<Track[]>
  loading: Observable<boolean>
  error: Observable<null | string>

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.tracks = store.select(state => state.tracks.tracks);
    this.loading = store.select(state => state.tracks.fetchLoading);
    this.error = store.select(state => state.tracks.fetchError);
  }



  ngOnInit(): void {
    const albumId = this.route.snapshot.params['id'];
    this.store.dispatch(fetchTracksRequest({id: albumId}));
  }

}
