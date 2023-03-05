"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveTransaction = exports.captureTransaction = exports.cancelledLetterTransaction = exports.chargebackTransaction = exports.updateTransaction = exports.getTransaction = exports.getTransactionsBySeller = exports.getTransactions = exports.createPixTransaction = exports.createDirectTransaction = exports.createBoletoTransaction = exports.createCardTokenTransaction = exports.createCustomerTransaction = void 0;
/* eslint-disable functional/no-throw-statement */
const qs_1 = __importDefault(require("qs"));
const common_1 = require("../common");
const validations_1 = require("./validations");
/**
 * Criar transação
 */
const createTransaction = (marketplace, body) => {
    return marketplace.post('/transactions', body);
};
/**
 * Criar transação por consumidor id
 */
const createCustomerTransaction = (marketplace, body) => {
    var _a, _b;
    const mBody = Object.assign(Object.assign({}, body), { payment_type: common_1.PaymentType.CREDIT, capture: (_a = body.capture) !== null && _a !== void 0 ? _a : true, currency: (_b = body.currency) !== null && _b !== void 0 ? _b : 'BRL' });
    validations_1.customerTransactionScheme.validateSync(mBody);
    return createTransaction(marketplace, mBody);
};
exports.createCustomerTransaction = createCustomerTransaction;
/**
 * Criar transação por token de cartão
 */
const createCardTokenTransaction = (marketplace, body) => {
    var _a, _b, _c, _d;
    const mBody = Object.assign(Object.assign({}, body), { payment_type: common_1.PaymentType.CREDIT, capture: (_a = body.capture) !== null && _a !== void 0 ? _a : true, source: Object.assign(Object.assign({}, body.source), { usage: (_b = body.source.usage) !== null && _b !== void 0 ? _b : 'single_use', type: (_c = body.source.type) !== null && _c !== void 0 ? _c : 'card', currency: (_d = body.source.currency) !== null && _d !== void 0 ? _d : 'BRL' }) });
    // boletoTransactionScheme.validateSync(mBody);
    return createTransaction(marketplace, mBody);
};
exports.createCardTokenTransaction = createCardTokenTransaction;
/**
 * Criar transação por boleto
 */
const createBoletoTransaction = (marketplace, body) => {
    var _a;
    const mBody = Object.assign(Object.assign({}, body), { payment_type: common_1.PaymentType.BOLETO, currency: (_a = body.currency) !== null && _a !== void 0 ? _a : 'BRL' });
    validations_1.boletoTransactionScheme.validateSync(mBody);
    return createTransaction(marketplace, mBody);
};
exports.createBoletoTransaction = createBoletoTransaction;
/**
 * Criar transação por autorização direta
 */
const createDirectTransaction = (marketplace, body) => {
    var _a, _b, _c, _d;
    const mBody = Object.assign(Object.assign({}, body), { payment_type: common_1.PaymentType.CREDIT, capture: (_a = body.capture) !== null && _a !== void 0 ? _a : true, source: Object.assign(Object.assign({}, body.source), { usage: (_b = body.source.usage) !== null && _b !== void 0 ? _b : 'single_use', type: (_c = body.source.type) !== null && _c !== void 0 ? _c : 'card', currency: (_d = body.source.currency) !== null && _d !== void 0 ? _d : 'BRL' }) });
    return createTransaction(marketplace, mBody);
};
exports.createDirectTransaction = createDirectTransaction;
/**
 * Criar transação por pix
 */
const createPixTransaction = (marketplace, body) => {
    const mBody = Object.assign(Object.assign({}, body), { payment_type: common_1.PaymentType.PIX, currency: body.currency || 'BRL' });
    validations_1.pixTransactionScheme.validateSync(mBody);
    return createTransaction(marketplace, mBody);
};
exports.createPixTransaction = createPixTransaction;
/**
 * Listar transações do marketplace
 */
const getTransactions = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/transactions?${queryString}`);
};
exports.getTransactions = getTransactions;
/**
 * Listar transações por vendedor
 */
const getTransactionsBySeller = (marketplace, selleId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${selleId}/transactions?${queryString}`);
};
exports.getTransactionsBySeller = getTransactionsBySeller;
/**
 * Listar detalhes de transação pelo identificador
 */
const getTransaction = (marketplace, transactionId) => {
    return marketplace.get(`/transactions/${transactionId}`);
};
exports.getTransaction = getTransaction;
/**
 * Alterar detalhes de transação pelo identificador
 */
const updateTransaction = (marketplace, transactionId, description, metadata) => {
    return marketplace.put(`/transactions/${transactionId}`, { description, metadata });
};
exports.updateTransaction = updateTransaction;
/**
 * Estornar transação cartão não presente
 */
const chargebackTransaction = (marketplace, transactionId, sellerId, amount, rules) => {
    return marketplace.post(`/transactions/${transactionId}/void`, { on_behalf_of: sellerId, amount, void_rules: rules });
};
exports.chargebackTransaction = chargebackTransaction;
/**
 * Disponibilizar link carta de cancelamento
 */
const cancelledLetterTransaction = (marketplace, transactionId) => {
    return marketplace.get(`/transactions/${transactionId}/cancelled-letter`);
};
exports.cancelledLetterTransaction = cancelledLetterTransaction;
/**
 * Capturar transação cartão não presente
 */
const captureTransaction = (marketplace, transactionId, sellerId, amount) => {
    return marketplace.post(`/transactions/${transactionId}/capture`, { on_behalf_of: sellerId, amount });
};
exports.captureTransaction = captureTransaction;
/**
 * Aprovar transação (somente sandbox)
 */
const approveTransaction = (marketplace, transactionId) => {
    if (!marketplace.isSandbox)
        throw new Error('Only available in test environment');
    return marketplace.post(`/transactions/${transactionId}/approve`, {});
};
exports.approveTransaction = approveTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFrRDtBQUNsRCw0Q0FBb0I7QUFFcEIsc0NBQThEO0FBYTlELCtDQUl1QjtBQUN2Qjs7R0FFRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FDeEIsV0FBeUIsRUFDekIsSUFLd0IsRUFDeEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FPckIsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUNGOztHQUVHO0FBQ0ksTUFBTSx5QkFBeUIsR0FBRyxDQUN2QyxXQUF5QixFQUN6QixJQUEwQixFQUMxQixFQUFFOztJQUNGLE1BQU0sS0FBSyxtQ0FDTixJQUFJLEtBQ1AsWUFBWSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUNoQyxPQUFPLEVBQUUsTUFBQSxJQUFJLENBQUMsT0FBTyxtQ0FBSSxJQUFJLEVBQzdCLFFBQVEsRUFBRSxNQUFBLElBQUksQ0FBQyxRQUFRLG1DQUFJLEtBQUssR0FDakMsQ0FBQztJQUNGLHVDQUF5QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFaVyxRQUFBLHlCQUF5Qiw2QkFZcEM7QUFDRjs7R0FFRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsQ0FDeEMsV0FBeUIsRUFDekIsSUFBMkIsRUFDM0IsRUFBRTs7SUFDRixNQUFNLEtBQUssbUNBQ04sSUFBSSxLQUNQLFlBQVksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFDaEMsT0FBTyxFQUFFLE1BQUEsSUFBSSxDQUFDLE9BQU8sbUNBQUksSUFBSSxFQUM3QixNQUFNLGtDQUNELElBQUksQ0FBQyxNQUFNLEtBQ2QsS0FBSyxF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