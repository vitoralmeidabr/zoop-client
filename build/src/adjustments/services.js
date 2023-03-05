"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAjustment = exports.getAjustment = exports.getAjustments = exports.createAjustmentOwner = exports.createAjustment = void 0;
/**
 * Criar ajuste de cobrança informando pagador e recebedor
 */
const createAjustment = (marketplace, owner, receiver, body) => {
    return marketplace.post(`/adjustments/${owner}/to/${receiver}`, body);
};
exports.createAjustment = createAjustment;
/**
 * Criar ajuste de cobrança informando somente pagador
 */
const createAjustmentOwner = (marketplace, owner, body) => {
    return marketplace.post(`/adjustments/${owner}`, body);
};
exports.createAjustmentOwner = createAjustmentOwner;
/**
 * Criar ajuste de cobrança informando somente pagador
 */
const getAjustments = (marketplace) => {
    return marketplace.get(`/adjustments`);
};
exports.getAjustments = getAjustments;
/**
 * Recuperar detalhes de ajuste de cobrança
 */
const getAjustment = (marketplace, ajustmentId) => {
    return marketplace.get(`/adjustments/${ajustmentId}`);
};
exports.getAjustment = getAjustment;
/**
 * Cancelar ajuste de cobrança agendado anteriormente à data prevista para efetivação
 */
const cancelAjustment = (marketplace, ajustmentId) => {
    return marketplace.delete(`/adjustments/${ajustmentId}`);
};
exports.cancelAjustment = cancelAjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWRqdXN0bWVudHMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0E7O0dBRUc7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUM3QixXQUF5QixFQUN6QixLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsSUFBZ0IsRUFDaEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxPQUFPLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hFLENBQUMsQ0FBQztBQVBXLFFBQUEsZUFBZSxtQkFPMUI7QUFDRjs7R0FFRztBQUNJLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsV0FBeUIsRUFDekIsS0FBYSxFQUNiLElBQWdCLEVBQ2hCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQztBQU5XLFFBQUEsb0JBQW9CLHdCQU0vQjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxXQUF5QixFQUFFLEVBQUU7SUFDekQsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFxQixjQUFjLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFGVyxRQUFBLGFBQWEsaUJBRXhCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFlBQVksR0FBRyxDQUMxQixXQUF5QixFQUN6QixXQUFtQixFQUNuQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLGdCQUFnQixXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUxXLFFBQUEsWUFBWSxnQkFLdkI7QUFDRjs7R0FFRztBQUNJLE1BQU0sZUFBZSxHQUFHLENBQzdCLFdBQXlCLEVBQ3pCLFdBQW1CLEVBQ25CLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBTFcsUUFBQSxlQUFlLG1CQUsxQiJ9