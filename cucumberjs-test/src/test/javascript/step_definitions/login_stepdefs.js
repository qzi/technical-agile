import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

{
  // ECMAScript 6 Test
  let username = "";
  let password = "";
  let isSubmit = false;

  Given("I have previously created a username: {word}", (paramUsername) => {
    username = paramUsername;
  });

  Given("I have previously created a password: {word}", (password_param) => {
    password = password_param;
  });

  When("I enter my username correctly", () => {
    assert.equal("kay", username);
  });

  When("I enter my passwrod correctly", () => {
    assert.equal("okay", password);
  });

  When("I click on the button {string}", (button) => {
    if (button === "login") {
      isSubmit = true;
    }
  });

  Then("I got a feedback {string}", function (expected) {
    if (isSubmit) {
      expect("login successfully").to.eql(expected);
    } else {
      console.log("login failed");
    }
  });
}
