import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'app';
  users = {
    name: "",
    password: "",
    confirm_password: "",
    Number: '',
    email: ""
  }
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,30})')]],
      confirm_password: ['', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,30})')]],
      Number: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // password: ['', [Validators.required, Validators.minLength(6)]]
  loginUser() {
    console.log(this.loginForm.value);
  }
  get name() {
    return this.loginForm.get('name')
  }
  get password() {
    return this.loginForm.get('password')
  }
  get confirm_password() {
    return this.loginForm.get('confirm_password')
  }
  get Number() {
    return this.loginForm.get('Number')
  }
  get email() {
    return this.loginForm.get('email')
  }
}