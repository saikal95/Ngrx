import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/types";
import {ActivatedRoute} from "@angular/router";
import { Track} from "../models/track.model";
import {fetchTracksRequest} from "../store/tracks.actions";
import {sendTrackHistoryRequest} from "../store/trackHistory.actions";
import {TrackHistoryData} from "../models/trackHistory.model";
import {User} from "../models/user.model";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.sass']
})
export class TracksComponent implements OnInit , OnDestroy{
  tracks: Observable<Track[]>
  user: Observable<User | null>
  trackHistoryData: Observable<TrackHistoryData[]>
  userSub: Subscription
  loading: Observable<boolean>
  error: Observable<null | string>
  userId: any;
  tokenId: any

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.tracks = store.select(state => state.tracks.tracks);
    this.loading = store.select(state => state.tracks.fetchLoading);
    this.error = store.select(state => state.tracks.fetchError);
    this.trackHistoryData = store.select(state => state.trackHistory.trackHistory);
    this.user = store.select(state=> state.users.user);
    this.userSub = this.user.subscribe(user=> {
       this.userId = user?._id
       this.tokenId = user?.token

    })
  }



  ngOnInit(): void {
    const albumId = this.route.snapshot.params['id'];
    this.store.dispatch(fetchTracksRequest({id: albumId}));
  }

  addToTrackH(id: string) {
    const trackHistory = {
      user: this.userId,
      track: id,
    }
    console.log(trackHistory);
    this.store.dispatch(sendTrackHistoryRequest({token: this.tokenId, trackHistory}))

  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}
