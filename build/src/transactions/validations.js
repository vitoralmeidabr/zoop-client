"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTransactionScheme = exports.boletoTransactionScheme = exports.pixTransactionScheme = void 0;
const utils_1 = require("../utils");
const transactionScheme = {
    on_behalf_of: utils_1.yup.string().required('on_behalf_of is required'),
    amount: utils_1.yup
        .number()
        .integer()
        .min(100, 'minimum value is 100')
        .required('amount is required'),
};
exports.pixTransactionScheme = utils_1.yup.object(Object.assign({}, transactionScheme));
exports.boletoTransactionScheme = utils_1.yup.object(Object.assign(Object.assign({}, transactionScheme), { customer: utils_1.yup.string().required('customer is required') }));
exports.customerTransactionScheme = utils_1.yup.object(Object.assign(Object.assign({}, transactionScheme), { customer: utils_1.yup.string().required('customer is required') }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3ZhbGlkYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9DQUErQjtBQUMvQixNQUFNLGlCQUFpQixHQUFHO0lBQ3hCLFlBQVksRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDO0lBQy9ELE1BQU0sRUFBRSxXQUFHO1NBQ1IsTUFBTSxFQUFFO1NBQ1IsT0FBTyxFQUFFO1NBQ1QsR0FBRyxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQztTQUNoQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7Q0FDbEMsQ0FBQztBQUVXLFFBQUEsb0JBQW9CLEdBQUcsV0FBRyxDQUFDLE1BQU0sbUJBQ3pDLGlCQUFpQixFQUNwQixDQUFDO0FBRVUsUUFBQSx1QkFBdUIsR0FBRyxXQUFHLENBQUMsTUFBTSxpQ0FDNUMsaUJBQWlCLEtBQ3BCLFFBQVEsRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQ3ZELENBQUM7QUFDVSxRQUFBLHlCQUF5QixHQUFHLFdBQUcsQ0FBQyxNQUFNLGlDQUM5QyxpQkFBaUIsS0FDcEIsUUFBUSxFQUFFLFdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFDdkQsQ0FBQyJ9