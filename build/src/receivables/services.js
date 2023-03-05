"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceivableBySeller = exports.getReceivableByTransaction = exports.getReceivable = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Listar detalhes de recebível
 */
const getReceivable = (marketplace, receivableId) => {
    return marketplace.get(`/receivables/${receivableId}`);
};
exports.getReceivable = getReceivable;
/**
 * Listar recebíveis por transação
 */
const getReceivableByTransaction = (marketplace, transactionId) => {
    return marketplace.get(`/transactions/${transactionId}/receivables`);
};
exports.getReceivableByTransaction = getReceivableByTransaction;
/**
 * Listar recebíveis por seller
 */
const getReceivableBySeller = (marketplace, sellerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${sellerId}/receivables?${queryString}`);
};
exports.getReceivableBySeller = getReceivableBySeller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVjZWl2YWJsZXMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBTXBCOztHQUVHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FDM0IsV0FBeUIsRUFDekIsWUFBb0IsRUFDcEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBYyxnQkFBZ0IsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFMVyxRQUFBLGFBQWEsaUJBS3hCO0FBRUY7O0dBRUc7QUFDSSxNQUFNLDBCQUEwQixHQUFHLENBQ3hDLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQ3BCLGlCQUFpQixhQUFhLGNBQWMsQ0FDN0MsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVBXLFFBQUEsMEJBQTBCLDhCQU9yQztBQUNGOztHQUVHO0FBQ0ksTUFBTSxxQkFBcUIsR0FBRyxDQUNuQyxXQUF5QixFQUN6QixRQUFnQixFQUNoQixLQUF3QixFQUN4QixFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQ3BCLFlBQVksUUFBUSxnQkFBZ0IsV0FBVyxFQUFFLENBQ2xELENBQUM7QUFDSixDQUFDLENBQUM7QUFUVyxRQUFBLHFCQUFxQix5QkFTaEMifQ==