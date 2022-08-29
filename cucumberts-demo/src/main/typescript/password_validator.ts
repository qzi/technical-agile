export class PasswordValidator {
  password: String = "";

  constructor() {
    console.log("PasswrodValidator inital");
  }

  verify(this: PasswordValidator, pwd: String): String {
    this.password = pwd;
    console.log(this.password + " verified");
    return this.password;
  }

}