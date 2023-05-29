import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      user: ['',(Validators.required,Validators.minLength(6),Validators.pattern('[a-z A-Z ]+$'))],
      password: ['',(Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern('[a-z A-Z 0-9 !@#$%^&*]+$'))]
    });
}
  loginUser() {
    console.log(this.loginForm.value)
  }
  get user() {
    return this.loginForm.get('user')
  }
  get password() {
    return this.loginForm.get('password')
  }
}
