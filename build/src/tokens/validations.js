"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardScheme = void 0;
const utils_1 = require("../utils");
exports.cardScheme = utils_1.yup.object({
    card_number: utils_1.yup
        .string()
        .creditCardNumber('card_number is not valid')
        .required('card_number is required'),
    holder_name: utils_1.yup
        .string()
        .creditCardHolderName('holder_name is not valid')
        .required('holder_name is required'),
    expiration_month: utils_1.yup
        .string()
        .creditCardExpirationMonth('expiration_month is not valid')
        .required('expiration_month is required'),
    expiration_year: utils_1.yup
        .string()
        .creditCardExpirationYear('expiration_year is not valid')
        .required('expiration_year is required'),
    security_code: utils_1.yup
        .string()
        .creditCardCvv('security_code is not valid')
        .required('security_code is required'),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdG9rZW5zL3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUErQjtBQUVsQixRQUFBLFVBQVUsR0FBRyxXQUFHLENBQUMsTUFBTSxDQUFDO0lBQ25DLFdBQVcsRUFBRSxXQUFHO1NBQ2IsTUFBTSxFQUFFO1NBQ1IsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7U0FDNUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDO0lBQ3RDLFdBQVcsRUFBRSxXQUFHO1NBQ2IsTUFBTSxFQUFFO1NBQ1Isb0JBQW9CLENBQUMsMEJBQTBCLENBQUM7U0FDaEQsUUFBUSxDQUFDLHlCQUF5QixDQUFDO0lBQ3RDLGdCQUFnQixFQUFFLFdBQUc7U0FDbEIsTUFBTSxFQUFFO1NBQ1IseUJBQXlCLENBQUMsK0JBQStCLENBQUM7U0FDMUQsUUFBUSxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLGVBQWUsRUFBRSxXQUFHO1NBQ2pCLE1BQU0sRUFBRTtTQUNSLHdCQUF3QixDQUFDLDhCQUE4QixDQUFDO1NBQ3hELFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQztJQUMxQyxhQUFhLEVBQUUsV0FBRztTQUNmLE1BQU0sRUFBRTtTQUNSLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztTQUMzQyxRQUFRLENBQUMsMkJBQTJCLENBQUM7Q0FDekMsQ0FBQyxDQUFDIn0=