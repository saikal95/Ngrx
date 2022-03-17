import { Component,  } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {User} from "../models/user.model";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {AppState} from "../store/types";
import {Store} from "@ngrx/store";
import {logoutUser} from "../store/users.actions";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent  {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  user: Observable<null | User>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {
    this.user = store.select(state => state.users.user);
  }

  logout() {
    this.store.dispatch(logoutUser());
  }

}
