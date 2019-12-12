import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const cred: LoginModel = {
      email: f.value.email,
      password: f.value.password
    };
    console.log(cred);
    this.loginService.login(cred).subscribe(res => {
      console.log(res)
    });
   f.reset();
  }
}
