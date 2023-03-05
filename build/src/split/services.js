"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSplitByTransaction = exports.updateSplitByTransaction = exports.getSplitRulesByTransaction = exports.getSplitByTransaction = exports.createSplitRecepientGross = exports.createSplitRecepient = exports.createSplit = void 0;
/**
 * Criar Split por transação
 */
const createSplitByTransaction = (marketplace, transactionId, body) => {
    return marketplace.post(`transactions/${transactionId}/split_rules`, body);
};
/**
 * Criar Split por valor ou Percentagem taxas do seller (principal)
 */
const createSplit = (marketplace, transactionId, body) => {
    return createSplitByTransaction(marketplace, transactionId, body);
};
exports.createSplit = createSplit;
/**
 * Criar Split por valor ou porcentagem recipient assume o valor total da taxa
 */
const createSplitRecepient = (marketplace, transactionId, body) => {
    const newBody = Object.assign(Object.assign({}, body), { charge_recipient_processing_fee: 'true' });
    return createSplitByTransaction(marketplace, transactionId, newBody);
};
exports.createSplitRecepient = createSplitRecepient;
/**
 * Criar Split por valor recipient assume o valor total da taxa
 */
const createSplitRecepientGross = (marketplace, transactionId, body) => {
    const newBody = Object.assign(Object.assign({}, body), { is_gross_amount: 'true', charge_recipient_processing_fee: 'true' });
    return createSplitByTransaction(marketplace, transactionId, newBody);
};
exports.createSplitRecepientGross = createSplitRecepientGross;
/**
 * Recupera detalhes de Split por ID
 */
const getSplitByTransaction = (marketplace, transactionId, splitId) => {
    return marketplace.get(`transactions/${transactionId}/split_rules/${splitId}`);
};
exports.getSplitByTransaction = getSplitByTransaction;
/**
 * Listar detalhes de Split por transação
 */
const getSplitRulesByTransaction = (marketplace, transactionId) => {
    return marketplace.get(`transactions/${transactionId}/split_rules`);
};
exports.getSplitRulesByTransaction = getSplitRulesByTransaction;
/**
 * Alterar Split por transação
 */
const updateSplitByTransaction = (marketplace, transactionId, splitId, body) => {
    return marketplace.put(`transactions/${transactionId}/split_rules/${splitId}`, body);
};
exports.updateSplitByTransaction = updateSplitByTransaction;
/**
 * Remover Split por transação
 */
const deleteSplitByTransaction = (marketplace, transactionId, splitId) => {
    return marketplace.delete(`transactions/${transactionId}/split_rules/${splitId}`);
};
exports.deleteSplitByTransaction = deleteSplitByTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3BsaXQvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBVUE7O0dBRUc7QUFDSCxNQUFNLHdCQUF3QixHQUFHLENBQy9CLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLElBSzZCLEVBQzdCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLGFBQWEsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdFLENBQUMsQ0FBQztBQUNGOztHQUVHO0FBQ0ksTUFBTSxXQUFXLEdBQUcsQ0FDekIsV0FBeUIsRUFDekIsYUFBcUIsRUFDckIsSUFBb0MsRUFDcEMsRUFBRTtJQUNGLE9BQU8sd0JBQXdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFOVyxRQUFBLFdBQVcsZUFNdEI7QUFFRjs7R0FFRztBQUNJLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsV0FBeUIsRUFDekIsYUFBcUIsRUFDckIsSUFBc0QsRUFDdEQsRUFBRTtJQUNGLE1BQU0sT0FBTyxtQ0FDUixJQUFJLEtBQ1AsK0JBQStCLEVBQUUsTUFBTSxHQUN4QyxDQUFDO0lBQ0YsT0FBTyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQVZXLFFBQUEsb0JBQW9CLHdCQVUvQjtBQUVGOztHQUVHO0FBQ0ksTUFBTSx5QkFBeUIsR0FBRyxDQUN2QyxXQUF5QixFQUN6QixhQUFxQixFQUNyQixJQUFzQixFQUN0QixFQUFFO0lBQ0YsTUFBTSxPQUFPLG1DQUNSLElBQUksS0FDUCxlQUFlLEVBQUUsTUFBTSxFQUN2QiwrQkFBK0IsRUFBRSxNQUFNLEdBQ3hDLENBQUM7SUFDRixPQUFPLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFDO0FBWFcsUUFBQSx5QkFBeUIsNkJBV3BDO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLHFCQUFxQixHQUFHLENBQ25DLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLE9BQWUsRUFDZixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUNwQixnQkFBZ0IsYUFBYSxnQkFBZ0IsT0FBTyxFQUFFLENBQ3ZELENBQUM7QUFDSixDQUFDLENBQUM7QUFSVyxRQUFBLHFCQUFxQix5QkFRaEM7QUFDRjs7R0FFRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsQ0FDeEMsV0FBeUIsRUFDekIsYUFBcUIsRUFDckIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsYUFBYSxjQUFjLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFMVyxRQUFBLDBCQUEwQiw4QkFLckM7QUFDRjs7R0FFRztBQUNJLE1BQU0sd0JBQXdCLEdBQUcsQ0FDdEMsV0FBeUIsRUFDekIsYUFBcUIsRUFDckIsT0FBZSxFQUNmLElBSzZCLEVBQzdCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQ3BCLGdCQUFnQixhQUFhLGdCQUFnQixPQUFPLEVBQUUsRUFDdEQsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDLENBQUM7QUFmVyxRQUFBLHdCQUF3Qiw0QkFlbkM7QUFDRjs7R0FFRztBQUNJLE1BQU0sd0JBQXdCLEdBQUcsQ0FDdEMsV0FBeUIsRUFDekIsYUFBcUIsRUFDckIsT0FBZSxFQUNmLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQ3ZCLGdCQUFnQixhQUFhLGdCQUFnQixPQUFPLEVBQUUsQ0FDdkQsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVJXLFFBQUEsd0JBQXdCLDRCQVFuQyJ9