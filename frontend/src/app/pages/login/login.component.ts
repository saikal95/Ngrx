import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/types";
import {LoginError, LoginUserData} from "../../models/user.model";
import {loginUserRequest} from "../../store/users.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  @ViewChild('f') form!: NgForm;
  loading: Observable<boolean>;
  error: Observable<null | LoginError>;

  constructor(private store: Store<AppState>) {
    this.loading = store.select(state => state.users.loginLoading);
    this.error = store.select(state => state.users.loginError);
  }
  onSubmit() {
    const userData: LoginUserData = this.form.value;
    console.log(userData);
    this.store.dispatch(loginUserRequest({userData}))
  }
}
