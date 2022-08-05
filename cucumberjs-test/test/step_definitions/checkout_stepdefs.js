import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

Given("the price of a banana is {int}c", function (price) {
           // Write code here that turns the phrase above into concrete actions
           this.price = price;

});


When("I checkout {int} banana", function (count) {
           // Write code here that turns the phrase above into concrete actions
           this.price = count * this.price;
           console.log(this.price);
});

Then("the total price should be {int}c", function (price) {
    assert.equal(this.price , price);
  }
);

