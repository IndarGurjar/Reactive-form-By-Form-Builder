import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive_form';
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern('[a-z A-Z ') ]),
    password:new FormControl('',[Validators.required,Validators.minLength(6), Validators.pattern('[a-z A-Z !@#$%^&*]+$')])
  })
  loginUser(){
    console.log(this.loginForm.value) 
  }
  get user(){
    return this.loginForm.get('user')
  } 
  get password(){
    return this.loginForm.get('password')
  }
}
