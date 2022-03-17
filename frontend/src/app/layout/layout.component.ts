import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AppState} from "../store/types";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {


  user: Observable<null | User>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {  this.user = store.select(state => state.users.user); }

  ngOnInit(): void {
  }

  logout() {

  }
}
