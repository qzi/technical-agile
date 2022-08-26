import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { PasswordValidator } from "../../../main/javascript/password_validator.js";

{

  Given('I am in register page', () => {
    // Write code here that turns the phrase above into concrete actions
    console.log('I am registering a new account');

  });

  Given('I have provided below information to create an account', (table) => {
    console.log(table.rowsHash());
    console.log(table.rows());
    console.log(table.hashes());
  });

  When('I submit the details', () => {
    // Write code here that turns the phrase above into concrete actions
    console.log('I submit the details');
  });

  Then('the registration should be successful', () => {
    // Write code here that turns the phrase above into concrete actions
    console.log('I registred a new account already');

  });


}
