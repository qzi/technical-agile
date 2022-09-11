import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { PasswordValidator } from "../../../main/typescript/password_validator";

{
  let username: String = "";
  let password: String = "";
  let isSubmit: Boolean = false;
  let passwordValidator = new PasswordValidator();

  Given("I have previously created a username: {word}", (paramUsername: string) => {
    username = paramUsername;
    console.log(username);
  });

  Given("I have previously created a password: {word}", (password_param: string) => {
    password = passwordValidator.verify(password_param);
  });

  When("I enter my username correctly", () => {
    assert.equal("kay", username);
  });

  When("I enter my passwrod correctly", () => {
    assert.equal("okay", password);
  });

  When("I click on the button {string}", (button: string) => {
    if (button === "login") {
      isSubmit = true;
    }
  });

  Then("I got a feedback {string}", function (expected: string) {
    if (isSubmit) {
      expect("login successfully").to.eql(expected);
    } else {
      console.log("login failed");
    }
  });

  Given("I have deposited $(100|250) in my account", (amount: number) => {
    assert.equal("100", amount);
  });

  Given("I do something", () => {
    return "pending";
  });
}
