"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessScheme = exports.sellerScheme = exports.merchantScheme = void 0;
const common_1 = require("../common");
const utils_1 = require("../utils");
exports.merchantScheme = {
    mcc: utils_1.yup.string().required('mcc is required'),
};
exports.sellerScheme = utils_1.yup.object(Object.assign(Object.assign(Object.assign({}, common_1.ownerScheme), exports.merchantScheme), { address: utils_1.yup.object(Object.assign({}, common_1.addressScheme)) }));
exports.businessScheme = utils_1.yup.object(Object.assign({ owner: utils_1.yup.object(Object.assign({}, common_1.ownerScheme)), owner_address: utils_1.yup.object(Object.assign({}, common_1.addressScheme)), business_name: utils_1.yup.string().required('business_name is required'), business_email: utils_1.yup
        .string()
        .email('email not is valid')
        .required('email is required'), ein: utils_1.yup.string().cnpj('ein not is valid').required('ein is required'), business_address: utils_1.yup.object(Object.assign({}, common_1.addressScheme)) }, exports.merchantScheme));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VsbGVycy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBdUQ7QUFDdkQsb0NBQStCO0FBRWxCLFFBQUEsY0FBYyxHQUFHO0lBQzVCLEdBQUcsRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO0NBQzlDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxXQUFHLENBQUMsTUFBTSwrQ0FDakMsb0JBQVcsR0FDWCxzQkFBYyxLQUNqQixPQUFPLEVBQUUsV0FBRyxDQUFDLE1BQU0sbUJBQ2Qsc0JBQWEsRUFDaEIsSUFDRixDQUFDO0FBQ1UsUUFBQSxjQUFjLEdBQUcsV0FBRyxDQUFDLE1BQU0saUJBQ3RDLEtBQUssRUFBRSxXQUFHLENBQUMsTUFBTSxtQkFDWixvQkFBVyxFQUNkLEVBQ0YsYUFBYSxFQUFFLFdBQUcsQ0FBQyxNQUFNLG1CQUNwQixzQkFBYSxFQUNoQixFQUNGLGFBQWEsRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLEVBQ2pFLGNBQWMsRUFBRSxXQUFHO1NBQ2hCLE1BQU0sRUFBRTtTQUNSLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztTQUMzQixRQUFRLENBQUMsbUJBQW1CLENBQUMsRUFDaEMsR0FBRyxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFDdEUsZ0JBQWdCLEVBQUUsV0FBRyxDQUFDLE1BQU0sbUJBQ3ZCLHNCQUFhLEVBQ2hCLElBQ0Msc0JBQWMsRUFDakIsQ0FBQyJ9