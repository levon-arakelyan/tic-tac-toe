import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RegistrationForm } from "./registration-form";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  public registrationForm: RegistrationForm = new RegistrationForm();
  constructor() { }

  ngOnInit() {
  }

  public register(): void {
    if (this.form.invalid) {
      return;
    }
  }
}