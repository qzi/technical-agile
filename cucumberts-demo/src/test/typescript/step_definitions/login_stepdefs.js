"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const password_validator_1 = require("../../../main/typescript/password_validator");
{
    // typescript Test
    let username = "";
    let password = "";
    let isSubmit = false;
    let passwordValidator = new password_validator_1.PasswordValidator();
    (0, cucumber_1.Given)("I have previously created a username: {word}", (paramUsername) => {
        username = paramUsername;
        console.log(username);
    });
    (0, cucumber_1.Given)("I have previously created a password: {word}", (password_param) => {
        password = passwordValidator.verify(password_param);
    });
    (0, cucumber_1.When)("I enter my username correctly", () => {
        assert_1.default.equal("kay", username);
    });
    (0, cucumber_1.When)("I enter my passwrod correctly", () => {
        assert_1.default.equal("okay", password);
    });
    (0, cucumber_1.When)("I click on the button {string}", (button) => {
        if (button === "login") {
            isSubmit = true;
        }
    });
    (0, cucumber_1.Then)("I got a feedback {string}", function (expected) {
        if (isSubmit) {
            (0, chai_1.expect)("login successfully").to.eql(expected);
        }
        else {
            console.log("login failed");
        }
    });
    (0, cucumber_1.Given)("I have deposited $(100|250) in my account", (amount) => {
        assert_1.default.equal("100", amount);
    });
}
