"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ownerScheme = exports.addressScheme = void 0;
const utils_1 = require("../utils");
exports.addressScheme = {
    line1: utils_1.yup.string().required('line1 is required'),
    line2: utils_1.yup.string().required('line2 is required'),
    neighborhood: utils_1.yup.string().required('neighborhood is required'),
    city: utils_1.yup.string().required('city is required'),
    state: utils_1.yup
        .string()
        .matches(/^[A-Z]{2}$/gm, 'state not is valid')
        .required('state is required'),
    postal_code: utils_1.yup
        .string()
        .matches(/^[0-9]{8}$/gm, 'postal_code not is valid')
        .required('postal_code is required'),
    country_code: utils_1.yup
        .string()
        .matches(/^[A-Z]{2}$/gm, 'country_code not is valid')
        .required('country_code is required'),
};
exports.ownerScheme = {
    birthdate: utils_1.yup.date().required('birthdate is required'),
    email: utils_1.yup.string().email('email not is valid').required('email is required'),
    first_name: utils_1.yup.string().required('first_name is required'),
    last_name: utils_1.yup.string().required('last_name is required'),
    phone_number: utils_1.yup.string().defined(),
    taxpayer_id: utils_1.yup
        .string()
        .cpf('taxpayer_id not is valid')
        .required('taxpayer_id is required'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUErQjtBQUVsQixRQUFBLGFBQWEsR0FBRztJQUMzQixLQUFLLEVBQUUsV0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRCxLQUFLLEVBQUUsV0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRCxZQUFZLEVBQUUsV0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztJQUMvRCxJQUFJLEVBQUUsV0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsV0FBRztTQUNQLE1BQU0sRUFBRTtTQUNSLE9BQU8sQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUM7U0FDN0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDO0lBQ2hDLFdBQVcsRUFBRSxXQUFHO1NBQ2IsTUFBTSxFQUFFO1NBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRSwwQkFBMEIsQ0FBQztTQUNuRCxRQUFRLENBQUMseUJBQXlCLENBQUM7SUFDdEMsWUFBWSxFQUFFLFdBQUc7U0FDZCxNQUFNLEVBQUU7U0FDUixPQUFPLENBQUMsY0FBYyxFQUFFLDJCQUEyQixDQUFDO1NBQ3BELFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztDQUN4QyxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUc7SUFDekIsU0FBUyxFQUFFLFdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7SUFDdkQsS0FBSyxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7SUFDN0UsVUFBVSxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUM7SUFDM0QsU0FBUyxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7SUFDekQsWUFBWSxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDcEMsV0FBVyxFQUFFLFdBQUc7U0FDYixNQUFNLEVBQUU7U0FDUixHQUFHLENBQUMsMEJBQTBCLENBQUM7U0FDL0IsUUFBUSxDQUFDLHlCQUF5QixDQUFDO0NBQ3ZDLENBQUMifQ==