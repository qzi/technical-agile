import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect }  from "chai";


Given("I have previously created a username: {word}", function (username) {
  this.username = username;
});

Given("I have previously created a password: {word}", function (password) {
  this.password = password;
});

When("I enter my username correctly", function () {
  assert.equal("kay", this.username);
});

When("I enter my passwrod correctly", function () {
  assert.equal("okay", this.password);
});

When("I click on the button {string}", function (button) {
  if (button === "login") {
    this.isSubmit = true;
  } else {
    this.isSubmit = false;
  }
});


Then("I got a feedback {string}", function (expected) {

  if (this.isSubmit) {
    expect("login successfully").to.eql(expected);
  } else {
    console.log("login failed");
  }
});
