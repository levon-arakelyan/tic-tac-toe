import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginForm } from "./login-form";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  public loginForm: LoginForm = new LoginForm();
  constructor() { }

  ngOnInit() {
  }

  public login(): void {
    if (this.form.invalid) {
      return;
    }
  }
}