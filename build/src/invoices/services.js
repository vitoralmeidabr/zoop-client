"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoiceBySeller = exports.getInvoice = exports.getInvoices = exports.chargebackInvoice = exports.deleteInvoice = exports.updateInvoice = exports.createInvoice = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Criar uma fatura avulsa
 */
const createInvoice = (marketplace, body) => {
    return marketplace.post(`/invoices`, body, { version: 2 });
};
exports.createInvoice = createInvoice;
/**
 * Alterar detalhes de uma fatura pelo identificador
 */
const updateInvoice = (marketplace, invoiceId, body) => {
    return marketplace.put(`/invoices/${invoiceId}`, body, {
        version: 2,
    });
};
exports.updateInvoice = updateInvoice;
/**
 * Remover uma fatura pelo identificador
 */
const deleteInvoice = (marketplace, invoiceId) => {
    return marketplace.delete(`/invoices/${invoiceId}`, {
        version: 2,
    });
};
exports.deleteInvoice = deleteInvoice;
/**
 * Estornar e reembolsar fatura
 */
const chargebackInvoice = (marketplace, invoiceId) => {
    return marketplace.post(`/invoices/${invoiceId}/void`, {}, {
        version: 2,
    });
};
exports.chargebackInvoice = chargebackInvoice;
/**
 * Listar todas as faturas de um marketplace
 */
const getInvoices = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/invoices?${queryString}`, {
        version: 2,
    });
};
exports.getInvoices = getInvoices;
/**
 * Listar os detalhes de uma fatura pelo identificador
 */
const getInvoice = (marketplace, invoiceId) => {
    return marketplace.get(`/invoices/${invoiceId}`, {
        version: 2,
    });
};
exports.getInvoice = getInvoice;
/**
 * Listar faturas associadas a um vendedor pelo identificador
 */
const getInvoiceBySeller = (marketplace, sellerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${sellerId}/invoices?${queryString}`, {
        version: 2,
    });
};
exports.getInvoiceBySeller = getInvoiceBySeller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW52b2ljZXMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBT3BCOztHQUVHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxXQUF5QixFQUFFLElBQWMsRUFBRSxFQUFFO0lBQ3pFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBb0IsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQztBQUZXLFFBQUEsYUFBYSxpQkFFeEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sYUFBYSxHQUFHLENBQzNCLFdBQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLElBQWMsRUFDZCxFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFvQixhQUFhLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRTtRQUN4RSxPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJXLFFBQUEsYUFBYSxpQkFReEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sYUFBYSxHQUFHLENBQUMsV0FBeUIsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDNUUsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFXLGFBQWEsU0FBUyxFQUFFLEVBQUU7UUFDNUQsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFKVyxRQUFBLGFBQWEsaUJBSXhCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFdBQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQ3JCLGFBQWEsU0FBUyxPQUFPLEVBQzdCLEVBQUUsRUFDRjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBWFcsUUFBQSxpQkFBaUIscUJBVzVCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFdBQVcsR0FBRyxDQUFDLFdBQXlCLEVBQUUsS0FBYyxFQUFFLEVBQUU7SUFDdkUsTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQXNCLGFBQWEsV0FBVyxFQUFFLEVBQUU7UUFDdEUsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFMVyxRQUFBLFdBQVcsZUFLdEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBeUIsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDekUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFXLGFBQWEsU0FBUyxFQUFFLEVBQUU7UUFDekQsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFKVyxRQUFBLFVBQVUsY0FJckI7QUFDRjs7R0FFRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsQ0FDaEMsV0FBeUIsRUFDekIsUUFBZ0IsRUFDaEIsS0FBYyxFQUNkLEVBQUU7SUFDRixNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FDcEIsWUFBWSxRQUFRLGFBQWEsV0FBVyxFQUFFLEVBQzlDO1FBQ0UsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFaVyxRQUFBLGtCQUFrQixzQkFZN0IifQ==