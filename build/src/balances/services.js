"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoryBalanceByBuyer = exports.getHistoryBalanceBySeller = exports.getHistoryBalance = exports.getBalanceBySeller = exports.getBalanceByBuyer = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Lista contas por buyer
 */
const getBalanceByBuyer = (marketplace, buyerId) => {
    return marketplace.get(`/buyers/${buyerId}/balances`);
};
exports.getBalanceByBuyer = getBalanceByBuyer;
/**
 * Lista contas por seller
 */
const getBalanceBySeller = (marketplace, sellerId) => {
    return marketplace.get(`/sellers/${sellerId}/balances`);
};
exports.getBalanceBySeller = getBalanceBySeller;
/**
 * Listar histórico de lançamentos pelo identificador da conta
 */
const getHistoryBalance = (marketplace, balanceId) => {
    return marketplace.get(`/balances/${balanceId}/history`);
};
exports.getHistoryBalance = getHistoryBalance;
/**
 * Listar histórico de lançamentos de conta por seller
 */
const getHistoryBalanceBySeller = (marketplace, sellerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${sellerId}/balances/history?${queryString}`);
};
exports.getHistoryBalanceBySeller = getHistoryBalanceBySeller;
/**
 * Listar histórico de lançamentos de conta por seller
 */
const getHistoryBalanceByBuyer = (marketplace, buyerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/buyers/${buyerId}/balances/history?${queryString}`);
};
exports.getHistoryBalanceByBuyer = getHistoryBalanceByBuyer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFsYW5jZXMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBT3BCOztHQUVHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxDQUMvQixXQUF5QixFQUN6QixPQUFlLEVBQ2YsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBVyxXQUFXLE9BQU8sV0FBVyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBTFcsUUFBQSxpQkFBaUIscUJBSzVCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQ2hDLFdBQXlCLEVBQ3pCLFFBQWdCLEVBQ2hCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQVcsWUFBWSxRQUFRLFdBQVcsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUxXLFFBQUEsa0JBQWtCLHNCQUs3QjtBQUVGOztHQUVHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxDQUMvQixXQUF5QixFQUN6QixTQUFpQixFQUNqQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFxQixhQUFhLFNBQVMsVUFBVSxDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFDO0FBTFcsUUFBQSxpQkFBaUIscUJBSzVCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLHlCQUF5QixHQUFHLENBQ3ZDLFdBQXlCLEVBQ3pCLFFBQWdCLEVBQ2hCLEtBQXFCLEVBQ3JCLEVBQUU7SUFDRixNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FDcEIsWUFBWSxRQUFRLHFCQUFxQixXQUFXLEVBQUUsQ0FDdkQsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVRXLFFBQUEseUJBQXlCLDZCQVNwQztBQUNGOztHQUVHO0FBQ0ksTUFBTSx3QkFBd0IsR0FBRyxDQUN0QyxXQUF5QixFQUN6QixPQUFlLEVBQ2YsS0FBcUIsRUFDckIsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLFlBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUNwQixXQUFXLE9BQU8scUJBQXFCLFdBQVcsRUFBRSxDQUNyRCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVFcsUUFBQSx3QkFBd0IsNEJBU25DIn0=