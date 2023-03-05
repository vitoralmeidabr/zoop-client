"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unattachFeeSubscription = exports.attachFeeSubscription = exports.getFeeSubscription = exports.getFeesSubscription = exports.getFee = exports.getFees = void 0;
/**
 * Listar plano de vendas por marketplace
 */
const getFees = (marketplace) => {
    return marketplace.get(`/plans`);
};
exports.getFees = getFees;
/**
 * Listar plano de vendas por marketplace
 */
const getFee = (marketplace) => {
    return marketplace.get(`/plans`);
};
exports.getFee = getFee;
/**
 * Listar assinaturas de plano de venda
 */
const getFeesSubscription = (marketplace) => {
    return marketplace.get(`/subscriptions`);
};
exports.getFeesSubscription = getFeesSubscription;
/**
 * Listar detalhes de assinatura de plano de venda
 */
const getFeeSubscription = (marketplace, subscriptionId) => {
    return marketplace.get(`/subscriptions/${subscriptionId}`);
};
exports.getFeeSubscription = getFeeSubscription;
/**
 * Listar detalhes de plano de venda
 */
const attachFeeSubscription = (marketplace, customerId, planId, quantity) => {
    return marketplace.post(`/subscriptions`, {
        customer: customerId,
        plan: planId,
        quantity,
    });
};
exports.attachFeeSubscription = attachFeeSubscription;
/**
 * Desassociar plano de venda
 */
const unattachFeeSubscription = (marketplace, subscriptionId) => {
    return marketplace.delete(`/subscriptions/${subscriptionId}`);
};
exports.unattachFeeSubscription = unattachFeeSubscription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmVlL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BOztHQUVHO0FBQ0ksTUFBTSxPQUFPLEdBQUcsQ0FBQyxXQUF5QixFQUFFLEVBQUU7SUFDbkQsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFrQixRQUFRLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUM7QUFGVyxRQUFBLE9BQU8sV0FFbEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sTUFBTSxHQUFHLENBQUMsV0FBeUIsRUFBRSxFQUFFO0lBQ2xELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBTyxRQUFRLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFGVyxRQUFBLE1BQU0sVUFFakI7QUFDRjs7R0FFRztBQUNJLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxXQUF5QixFQUFFLEVBQUU7SUFDL0QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUE4QixnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsQ0FBQztBQUZXLFFBQUEsbUJBQW1CLHVCQUU5QjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxrQkFBa0IsR0FBRyxDQUNoQyxXQUF5QixFQUN6QixjQUFzQixFQUN0QixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFtQixrQkFBa0IsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUMvRSxDQUFDLENBQUM7QUFMVyxRQUFBLGtCQUFrQixzQkFLN0I7QUFDRjs7R0FFRztBQUNJLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsV0FBeUIsRUFDekIsVUFBa0IsRUFDbEIsTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQTRCLGdCQUFnQixFQUFFO1FBQ25FLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUTtLQUNULENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVhXLFFBQUEscUJBQXFCLHlCQVdoQztBQUNGOztHQUVHO0FBRUksTUFBTSx1QkFBdUIsR0FBRyxDQUNyQyxXQUF5QixFQUN6QixjQUFzQixFQUN0QixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFVLGtCQUFrQixjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQztBQUxXLFFBQUEsdUJBQXVCLDJCQUtsQyJ9