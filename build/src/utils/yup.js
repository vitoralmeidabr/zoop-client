"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable functional/no-this-expression */
// yup-extended.ts
const card_validator_1 = __importDefault(require("card-validator"));
const check_password_strength_1 = require("check-password-strength");
const Yup = __importStar(require("yup"));
const brValidator = require('br-validations');
Yup.addMethod(Yup.string, 'creditCardNumber', function (errorMessage) {
    return this.test(`creditcard-number-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const validator = card_validator_1.default.number(value);
        return (validator.isValid || createError({ path, message: errorMessage }));
    });
});
Yup.addMethod(Yup.string, 'creditCardCvv', function (errorMessage) {
    return this.test(`creditcard-cvv-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const validator = card_validator_1.default.cvv(value);
        return validator.isValid || createError({ path, message: errorMessage });
    });
});
Yup.addMethod(Yup.string, 'creditCardHolderName', function (errorMessage) {
    return this.test(`creditcard-holder-name-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const validator = card_validator_1.default.cardholderName(value);
        return (validator.isValid || createError({ path, message: errorMessage }));
    });
});
Yup.addMethod(Yup.string, 'creditCardExpirationYear', function (errorMessage) {
    return this.test(`creditcard-expiration-year-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const validator = card_validator_1.default.expirationYear(value);
        return (validator.isValid || createError({ path, message: errorMessage }));
    });
});
Yup.addMethod(Yup.string, 'creditCardExpirationMonth', function (errorMessage) {
    return this.test(`creditcard-expiration-month-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const validator = card_validator_1.default.expirationMonth(value);
        return (validator.isValid || createError({ path, message: errorMessage }));
    });
});
Yup.addMethod(Yup.string, 'cnpj', function (errorMessage) {
    return this.test(`cnpj-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const isValid = brValidator.cnpj.validate(value);
        return isValid || createError({ path, message: errorMessage });
    });
});
Yup.addMethod(Yup.string, 'cpf', function (errorMessage) {
    return this.test(`cpf-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const isValid = brValidator.cpf.validate(value);
        return isValid || createError({ path, message: errorMessage });
    });
});
Yup.addMethod(Yup.string, 'password', function (errorMessage) {
    return this.test(`password-is-valid`, errorMessage, function (value) {
        const { path, createError } = this;
        const passwordCheck = (0, check_password_strength_1.passwordStrength)(value || '');
        const isValid = passwordCheck.id >= 2; // Medium or Strong
        return isValid || createError({ path, message: errorMessage });
    });
});
exports.default = Yup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3l1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsa0RBQWtEO0FBQ2xELGtCQUFrQjtBQUNsQixvRUFBMkM7QUFDM0MscUVBQTJEO0FBQzNELHlDQUEyQjtBQUUzQixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUU5QyxHQUFHLENBQUMsU0FBUyxDQUNYLEdBQUcsQ0FBQyxNQUFNLEVBQ1Ysa0JBQWtCLEVBQ2xCLFVBQVUsWUFBWTtJQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsNEJBQTRCLEVBQzVCLFlBQVksRUFDWixVQUFVLEtBQUs7UUFDYixNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNuQyxNQUFNLFNBQVMsR0FBRyx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQ0wsU0FBUyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQ2xFLENBQUM7SUFDSixDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBQ0YsR0FBRyxDQUFDLFNBQVMsQ0FDWCxHQUFHLENBQUMsTUFBTSxFQUNWLGVBQWUsRUFDZixVQUFVLFlBQVk7SUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFlBQVksRUFBRSxVQUFVLEtBQUs7UUFDdkUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDbkMsTUFBTSxTQUFTLEdBQUcsd0JBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsT0FBTyxTQUFTLENBQUMsT0FBTyxJQUFJ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