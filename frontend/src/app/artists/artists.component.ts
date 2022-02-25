import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AppState} from "../store/types";
import {Store} from "@ngrx/store";
import {Artist} from "../models/artist.model";
import {fetchArtistsRequest} from "../store/artists.actions";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.sass']
})
export class ArtistsComponent implements OnInit {

  artists: Observable<Artist[]>
  loading: Observable<boolean>
  error: Observable<null | string>

  constructor(private store: Store<AppState>) {
    this.artists = store.select(state => state.artists.artists);
    this.loading = store.select(state => state.artists.fetchLoading);
    this.error = store.select(state => state.artists.fetchError);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchArtistsRequest());
  }

}
