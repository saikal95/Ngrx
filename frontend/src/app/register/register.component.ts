import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

class RegisterError {
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') form! : NgForm;
  // error: Observable<null | RegisterError>;
  // errorSub!: Subscription;
  // loading: Observable<boolean>
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
