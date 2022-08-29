"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.Given)("the price of a banana is {int}c", function (price) {
    this.price = price;
});
(0, cucumber_1.When)("I checkout {int} banana", function (count) {
    this.price = count * this.price;
});
(0, cucumber_1.Then)("the total price should be {int}c", function (price) {
    assert_1.default.equal(this.price, price);
});
(0, cucumber_1.Given)("I have a password", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});
(0, cucumber_1.When)("enter a password", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});
(0, cucumber_1.Then)("log in succesfully", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});
(0, cucumber_1.Then)("I do something", () => {
    return "pending";
});
