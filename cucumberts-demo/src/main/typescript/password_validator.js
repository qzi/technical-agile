"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidator = void 0;
class PasswordValidator {
    constructor() {
        this.password = "";
        console.log("PasswrodValidator inital");
    }
    verify(pwd) {
        this.password = pwd;
        console.log(this.password + " verified");
        return this.password;
    }
}
exports.PasswordValidator = PasswordValidator;
