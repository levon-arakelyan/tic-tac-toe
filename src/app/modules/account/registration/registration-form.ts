export class RegistrationForm {
  public username: string;
  public email: string;
  public password: string;
  public confirmedPassword: string;

  constructor() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmedPassword = '';
  }
}