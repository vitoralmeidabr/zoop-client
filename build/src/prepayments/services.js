"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.receivablesPrePayment = exports.commitPrePayment = exports.getPrePayment = exports.getFuturePrePaymentsBySeller = exports.getPrePaymentsBySeller = exports.getPrePayments = exports.createPrePayment = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Criação de novo pedido de antecipação
 */
const createPrePayment = (marketplace, body) => {
    return marketplace.post(`/prepayments`, body);
};
exports.createPrePayment = createPrePayment;
/**
 * Listagem de antecipações do Marketplace
 */
const getPrePayments = (marketplace) => {
    return marketplace.get(`/prepayments`);
};
exports.getPrePayments = getPrePayments;
/**
 * Listagem de antecipações do Seller
 */
const getPrePaymentsBySeller = (marketplace, sellerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${sellerId}/prepayments?${queryString}`);
};
exports.getPrePaymentsBySeller = getPrePaymentsBySeller;
/**
 * Recupera informações da agenda futura do Seller
 */
const getFuturePrePaymentsBySeller = (marketplace, sellerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${sellerId}/prepayments/info?${queryString}`);
};
exports.getFuturePrePaymentsBySeller = getFuturePrePaymentsBySeller;
/**
 * Detalhe de antecipação
 */
const getPrePayment = (marketplace, prePaymentId) => {
    return marketplace.get(`/prepayments/${prePaymentId}`);
};
exports.getPrePayment = getPrePayment;
/**
 * Atualização de status da antecipação
 */
const commitPrePayment = (marketplace, prePaymentId) => {
    return marketplace.get(`/prepayments/${prePaymentId}/commit`);
};
exports.commitPrePayment = commitPrePayment;
/**
 * Verificando Recebíveis Aptos a Antecipação
 */
const receivablesPrePayment = (marketplace, customerId, prepayable_for) => {
    return marketplace.get(`/sellers/${customerId}/receivables?${prepayable_for}`);
};
exports.receivablesPrePayment = receivablesPrePayment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJlcGF5bWVudHMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBU3BCOztHQUVHO0FBQ0ksTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixXQUF5QixFQUN6QixJQUFpQixFQUNqQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFMVyxRQUFBLGdCQUFnQixvQkFLM0I7QUFDRjs7R0FFRztBQUNJLE1BQU0sY0FBYyxHQUFHLENBQUMsV0FBeUIsRUFBRSxFQUFFO0lBQzFELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBeUIsY0FBYyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRlcsUUFBQSxjQUFjLGtCQUV6QjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxzQkFBc0IsR0FBRyxDQUNwQyxXQUF5QixFQUN6QixRQUFnQixFQUNoQixLQUF3QixFQUN4QixFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQ3BCLFlBQVksUUFBUSxnQkFBZ0IsV0FBVyxFQUFFLENBQ2xELENBQUM7QUFDSixDQUFDLENBQUM7QUFUVyxRQUFBLHNCQUFzQiwwQkFTakM7QUFDRjs7R0FFRztBQUNJLE1BQU0sNEJBQTRCLEdBQUcsQ0FDMUMsV0FBeUIsRUFDekIsUUFBZ0IsRUFDaEIsS0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLFlBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUNwQixZQUFZLFFBQVEscUJBQXFCLFdBQVcsRUFBRSxDQUN2RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVFcsUUFBQSw0QkFBNEIsZ0NBU3ZDO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLGFBQWEsR0FBRyxDQUMzQixXQUF5QixFQUN6QixZQUFvQixFQUNwQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFjLGdCQUFnQixZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUxXLFFBQUEsYUFBYSxpQkFLeEI7QUFFRjs7R0FFRztBQUNJLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDOUIsV0FBeUIsRUFDekIsWUFBb0IsRUFDcEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBYyxnQkFBZ0IsWUFBWSxTQUFTLENBQUMsQ0FBQztBQUM3RSxDQUFDLENBQUM7QUFMVyxRQUFBLGdCQUFnQixvQkFLM0I7QUFDRjs7R0FFRztBQUNJLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsV0FBeUIsRUFDekIsVUFBa0IsRUFDbEIsY0FBc0IsRUFDdEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FDcEIsWUFBWSxVQUFVLGdCQUFnQixjQUFjLEVBQUUsQ0FDdkQsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVJXLFFBQUEscUJBQXFCLHlCQVFoQyJ9