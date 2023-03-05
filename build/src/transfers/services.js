"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReceivingPolicy = exports.getReceivingPolicy = exports.getFutureTransfers = exports.getTransferOnTransactions = exports.getTransfersBySeller = exports.cancelTransfer = exports.getTransfer = exports.getTransfers = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Listar transferências por marketplace
 */
const getTransfers = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/transfers?${queryString}`);
};
exports.getTransfers = getTransfers;
/**
 * Recuperar detalhes de transferência
 */
const getTransfer = (marketplace, transferId) => {
    return marketplace.get(`/transfers/${transferId}`);
};
exports.getTransfer = getTransfer;
/**
 * Cancelar transferência agendada anteriormente à data prevista para efetivação
 */
const cancelTransfer = (marketplace, transferId) => {
    return marketplace.delete(`/transfers/${transferId}`);
};
exports.cancelTransfer = cancelTransfer;
/**
 * Listar detalhes de recebível
 */
const getTransfersBySeller = (marketplace, sellerId) => {
    return marketplace.get(`/sellers/${sellerId}/transfers`);
};
exports.getTransfersBySeller = getTransfersBySeller;
/**
 * Listar transações associadas a transferência
 */
const getTransferOnTransactions = (marketplace, transferId) => {
    return marketplace.get(`/transfers/${transferId}/transactions`);
};
exports.getTransferOnTransactions = getTransferOnTransactions;
/**
 * Listar lançamentos futuros por seller
 */
const getFutureTransfers = (marketplace, sellerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${sellerId}/future-transfers?${queryString}`, { version: 2 });
};
exports.getFutureTransfers = getFutureTransfers;
/**
 * Recuperar política de recebimento por seller
 */
const getReceivingPolicy = (marketplace, sellerId) => {
    return marketplace.get(`/sellers/${sellerId}/receiving_policy`);
};
exports.getReceivingPolicy = getReceivingPolicy;
/**
 * Recuperar política de recebimento por seller
 */
const updateReceivingPolicy = (marketplace, sellerId, body) => {
    return marketplace.post(`/sellers/${sellerId}/receiving_policy`, body);
};
exports.updateReceivingPolicy = updateReceivingPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNmZXJzL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQVdwQjs7R0FFRztBQUNJLE1BQU0sWUFBWSxHQUFHLENBQzFCLFdBQXlCLEVBQ3pCLEtBQXNCLEVBQ3RCLEVBQUU7SUFDRixNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDO0FBTlcsUUFBQSxZQUFZLGdCQU12QjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxXQUFXLEdBQUcsQ0FBQyxXQUF5QixFQUFFLFVBQWtCLEVBQUUsRUFBRTtJQUMzRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQXFCLGNBQWMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUN6RSxDQUFDLENBQUM7QUFGVyxRQUFBLFdBQVcsZUFFdEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sY0FBYyxHQUFHLENBQzVCLFdBQXlCLEVBQ3pCLFVBQWtCLEVBQ2xCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUxXLFFBQUEsY0FBYyxrQkFLekI7QUFDRjs7R0FFRztBQUNJLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsV0FBeUIsRUFDekIsUUFBZ0IsRUFDaEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBcUIsWUFBWSxRQUFRLFlBQVksQ0FBQyxDQUFDO0FBQy9FLENBQUMsQ0FBQztBQUxXLFFBQUEsb0JBQW9CLHdCQUsvQjtBQUNGOztHQUVHO0FBQ0ksTUFBTSx5QkFBeUIsR0FBRyxDQUN2QyxXQUF5QixFQUN6QixVQUFrQixFQUNsQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLGNBQWMsVUFBVSxlQUFlLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFMVyxRQUFBLHlCQUF5Qiw2QkFLcEM7QUFDRjs7R0FFRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsQ0FDaEMsV0FBeUIsRUFDekIsUUFBZ0IsRUFDaEIsS0FBNEIsRUFDNUIsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLFlBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUNwQixZQUFZLFFBQVEscUJBQXFCLFdBQVcsRUFBRSxFQUN0RCxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVlcsUUFBQSxrQkFBa0Isc0JBVTdCO0FBRUY7O0dBRUc7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQ2hDLFdBQXlCLEVBQ3pCLFFBQWdCLEVBQ2hCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxRQUFRLG1CQUFtQixDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBTFcsUUFBQSxrQkFBa0Isc0JBSzdCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLHFCQUFxQixHQUFHLENBQ25DLFdBQXlCLEVBQ3pCLFFBQWdCLEVBQ2hCLElBQXNCLEVBQ3RCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQztBQU5XLFFBQUEscUJBQXFCLHlCQU1oQyJ9