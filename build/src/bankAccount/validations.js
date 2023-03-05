"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankAccountPJScheme = exports.bankAccountPFScheme = void 0;
const utils_1 = require("../utils");
const accountScheme = {
    holder_name: utils_1.yup.string().required('holder_name is required'),
    bank_code: utils_1.yup.number().required('bank_code is required'),
    routing_number: utils_1.yup.number().required('routing_number is required'),
    account_number: utils_1.yup.number().required('account_number is required'),
};
exports.bankAccountPFScheme = utils_1.yup.object(Object.assign(Object.assign({}, accountScheme), { taxpayer_id: utils_1.yup
        .string()
        .cpf('taxpayer_id is not valid')
        .required('taxpayer_id is required') }));
exports.bankAccountPJScheme = utils_1.yup.object(Object.assign(Object.assign({}, accountScheme), { ein: utils_1.yup.string().cnpj('ein is not valid').required('ein is required') }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFua0FjY291bnQvdmFsaWRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQStCO0FBRS9CLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLFdBQVcsRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDO0lBQzdELFNBQVMsRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO0lBQ3pELGNBQWMsRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDO0lBQ25FLGNBQWMsRUFBRSxXQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDO0NBQ3BFLENBQUM7QUFDVyxRQUFBLG1CQUFtQixHQUFHLFdBQUcsQ0FBQyxNQUFNLGlDQUN4QyxhQUFhLEtBQ2hCLFdBQVcsRUFBRSxXQUFHO1NBQ2IsTUFBTSxFQUFFO1NBQ1IsR0FBRyxDQUFDLDBCQUEwQixDQUFDO1NBQy9CLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUN0QyxDQUFDO0FBQ1UsUUFBQSxtQkFBbUIsR0FBRyxXQUFHLENBQUMsTUFBTSxpQ0FDeEMsYUFBYSxLQUNoQixHQUFHLEVBQUUsV0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUN0RSxDQUFDIn0=