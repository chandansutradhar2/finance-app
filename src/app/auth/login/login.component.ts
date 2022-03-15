import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  h4Styles = {};
  loginClicked: boolean = false;
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/),
  ]);
  constructor() {}

  ngOnInit(): void {
    this.password.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

  applyStyles() {
    this.h4Styles = {
      'font-size': this.loginClicked ? 'x-large' : 'xx-large',
      'font-weight': this.loginClicked ? '500' : '300',
      'border-color': this.loginClicked ? 'green' : 'red',
      'border-style': this.loginClicked ? 'dashed' : 'double',
    };
  }
  login() {
    this.email.markAsDirty();
    this.password.markAsDirty();

    this.email.valid && this.password.valid
      ? (this.loginClicked = true)
      : (this.loginClicked = false);
    console.log(this.email.value, this.password.value);
    this.applyStyles();
  }
}
