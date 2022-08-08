import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

Given("the price of a banana is {int}c", function (price) {
  this.price = price;
});

When("I checkout {int} banana", function (count) {
  this.price = count * this.price;
});

Then("the total price should be {int}c", function (price) {
  assert.equal(this.price, price);
});
