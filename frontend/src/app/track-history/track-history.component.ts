import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/types";
import {ActivatedRoute} from "@angular/router";
import {TrackHistory} from "../models/trackHistory.model";
import {fetchTrackHistoryRequest} from "../store/trackHistory.actions";
import {User} from "../models/user.model";

@Component({
  selector: 'app-track-history',
  templateUrl: './track-history.component.html',
  styleUrls: ['./track-history.component.sass']
})
export class TrackHistoryComponent implements OnInit, OnDestroy {

  trackHistory: Observable<TrackHistory[]>
  user: Observable<User | null>
  userId: any;
  token : any;
  userSub: Subscription;
  loading: Observable<boolean>
  error: Observable<null | string>

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.trackHistory = store.select(state => state.trackHistory.trackHistory);
    console.log(this.trackHistory);
    this.user = store.select(state => state.users.user);
    this.loading = store.select(state => state.tracks.fetchLoading);
    this.error = store.select(state => state.tracks.fetchError);
    this.userSub = this.user.subscribe(user =>{
      this.userId = user?._id;
      this.token = user?.token;
    })
  }



  ngOnInit(): void {
    this.store.dispatch(fetchTrackHistoryRequest({id: this.userId, token: this.token}));
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
