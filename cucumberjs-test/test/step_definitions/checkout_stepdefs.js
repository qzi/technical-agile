import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

Given("the price of a banana is 40c", function ( ) {
           // Write code here that turns the phrase above into concrete actions
           this.count = 40;

});


When("I checkout {int} banana", function () {
           // Write code here that turns the phrase above into concrete actions
           this.count = 1 * this.count;
           console.log(this.count);
});

Then("the total price should be 40c", function () {
    assert.equal(this.count , 40);
  }
);
