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
      user: ['',(Validators.required,Validators.pattern('[a-z A-Z ]{6,}$'))],
      password: ['',(Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/))]
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