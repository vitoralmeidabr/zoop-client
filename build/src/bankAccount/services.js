"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachBankAccount = exports.deleteBankAccount = exports.createBankAccount = exports.getBankAccounts = exports.getBankAccountBySeller = exports.getBankAccount = void 0;
const validations_1 = require("./validations");
/**
 * Get Bank Account by Id
 */
const getBankAccount = (marketplace, banckAccountId) => {
    return marketplace.get(`/bank_accounts/${banckAccountId}`);
};
exports.getBankAccount = getBankAccount;
/**
 * Get Bank Account by Seller
 * Lista todas as contas, ativas e inativas
 */
const getBankAccountBySeller = (marketplace, sellerId) => {
    return marketplace.get(`/sellers/${sellerId}/bank_accounts`);
};
exports.getBankAccountBySeller = getBankAccountBySeller;
/**
 * Get All Bank Accounts
 */
const getBankAccounts = (marketplace) => {
    return marketplace.get(`/bank_accounts`);
};
exports.getBankAccounts = getBankAccounts;
/**
 * Create Bank Account
 */
const createBankAccount = (marketplace, body) => {
    body.taxpayer_id
        ? validations_1.bankAccountPFScheme.validateSync(body)
        : validations_1.bankAccountPJScheme.validateSync(body);
    return marketplace.post(`/bank_accounts/tokens`, body);
};
exports.createBankAccount = createBankAccount;
/**
 * Delete Bank Account
 */
const deleteBankAccount = (marketplace, bankAccountId) => {
    return marketplace.delete(`/bank_accounts/${bankAccountId}`);
};
exports.deleteBankAccount = deleteBankAccount;
/**
 * Attch Bank To Customer
 */
const attachBankAccount = (marketplace, banckAccountId, customerId) => {
    return marketplace.post(`/bank_accounts`, {
        customer: customerId,
        token: banckAccountId,
    });
};
exports.attachBankAccount = attachBankAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFua0FjY291bnQvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsK0NBQXlFO0FBRXpFOztHQUVHO0FBQ0ksTUFBTSxjQUFjLEdBQUcsQ0FDNUIsV0FBeUIsRUFDekIsY0FBc0IsRUFDdEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBUSxrQkFBa0IsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFMVyxRQUFBLGNBQWMsa0JBS3pCO0FBQ0Y7OztHQUdHO0FBQ0ksTUFBTSxzQkFBc0IsR0FBRyxDQUNwQyxXQUF5QixFQUN6QixRQUFnQixFQUNoQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFRLFlBQVksUUFBUSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUxXLFFBQUEsc0JBQXNCLDBCQUtqQztBQUNGOztHQUVHO0FBQ0ksTUFBTSxlQUFlLEdBQUcsQ0FBQyxXQUF5QixFQUFFLEVBQUU7SUFDM0QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFtQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUZXLFFBQUEsZUFBZSxtQkFFMUI7QUFDRjs7R0FFRztBQUNJLE1BQU0saUJBQWlCLEdBQUcsQ0FDL0IsV0FBeUIsRUFDekIsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLElBQUksQ0FBQyxXQUFXO1FBQ2QsQ0FBQyxDQUFDLGlDQUFtQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDeEMsQ0FBQyxDQUFDLGlDQUFtQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQ3JCLHVCQUF1QixFQUN2QixJQUFJLENBQ0wsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVpXLFFBQUEsaUJBQWlCLHFCQVk1QjtBQUVGOztHQUVHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxDQUMvQixXQUF5QixFQUN6QixhQUFxQixFQUNyQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFVLGtCQUFrQixhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsQ0FBQztBQUxXLFFBQUEsaUJBQWlCLHFCQUs1QjtBQUVGOztHQUVHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxDQUMvQixXQUF5QixFQUN6QixjQUFzQixFQUN0QixVQUFrQixFQUNsQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFpQixnQkFBZ0IsRUFBRTtRQUN4RCxRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsY0FBYztLQUN0QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFUVyxRQUFBLGlCQUFpQixxQkFTNUIifQ==