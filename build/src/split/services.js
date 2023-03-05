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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3BsaXQvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBV0E7O0dBRUc7QUFDSCxNQUFNLHdCQUF3QixHQUFHLENBQy9CLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLElBSzZCLEVBQzdCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQXlCLGdCQUFnQixhQUFhLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRyxDQUFDLENBQUM7QUFDRjs7R0FFRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQ3pCLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLElBQW9DLEVBQ3BDLEVBQUU7SUFDRixPQUFPLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0FBTlcsUUFBQSxXQUFXLGVBTXRCO0FBRUY7O0dBRUc7QUFDSSxNQUFNLG9CQUFvQixHQUFHLENBQ2xDLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLElBQXNELEVBQ3RELEVBQUU7SUFDRixNQUFNLE9BQU8sbUNBQ1IsSUFBSSxLQUNQLCtCQUErQixFQUFFLE1BQU0sR0FDeEMsQ0FBQztJQUNGLE9BQU8sd0JBQXdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUM7QUFWVyxRQUFBLG9CQUFvQix3QkFVL0I7QUFFRjs7R0FFRztBQUNJLE1BQU0seUJBQXlCLEdBQUcsQ0FDdkMsV0FBeUIsRUFDekIsYUFBcUIsRUFDckIsSUFBc0IsRUFDdEIsRUFBRTtJQUNGLE1BQU0sT0FBTyxtQ0FDUixJQUFJLEtBQ1AsZUFBZSxFQUFFLE1BQU0sRUFDdkIsK0JBQStCLEVBQUUsTUFBTSxHQUN4QyxDQUFDO0lBQ0YsT0FBTyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQVhXLFFBQUEseUJBQXlCLDZCQVdwQztBQUNGOztHQUVHO0FBQ0ksTUFBTSxxQkFBcUIsR0FBRyxDQUNuQyxXQUF5QixFQUN6QixhQUFxQixFQUNyQixPQUFlLEVBQ2YsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FDcEIsZ0JBQWdCLGFBQWEsZ0JBQWdCLE9BQU8sRUFBRSxDQUN2RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUlcsUUFBQSxxQkFBcUIseUJBUWhDO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLDBCQUEwQixHQUFHLENBQ3hDLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLGFBQWEsY0FBYyxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBTFcsUUFBQSwwQkFBMEIsOEJBS3JDO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLHdCQUF3QixHQUFHLENBQ3RDLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLE9BQWUsRUFDZixJQUs2QixFQUM3QixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUNwQixnQkFBZ0IsYUFBYSxnQkFBZ0IsT0FBTyxFQUFFLEVBQ3RELElBQUksQ0FDTCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBZlcsUUFBQSx3QkFBd0IsNEJBZW5DO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLHdCQUF3QixHQUFHLENBQ3RDLFdBQXlCLEVBQ3pCLGFBQXFCLEVBQ3JCLE9BQWUsRUFDZixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUN2QixnQkFBZ0IsYUFBYSxnQkFBZ0IsT0FBTyxFQUFFLENBQ3ZELENBQUM7QUFDSixDQUFDLENBQUM7QUFSVyxRQUFBLHdCQUF3Qiw0QkFRbkMifQ==