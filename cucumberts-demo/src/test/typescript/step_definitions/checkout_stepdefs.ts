import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

Given("the price of a banana is {int}c", function (price: number) {
  this.price = price;
});

When("I checkout {int} banana", function (count: number) {
  this.price = count * this.price;
});

Then("the total price should be {int}c", function (price: number) {
  assert.equal(this.price, price);
});

Given("I have a password", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("enter a password", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("log in succesfully", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("I do something", () => {
  return "pending";
});
