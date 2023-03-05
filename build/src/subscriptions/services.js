"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactivateSubscription = exports.suspendSubscription = exports.deleteSubscription = exports.getSubscriptionsBySeller = exports.getSubscription = exports.getSubscriptions = exports.updateSubscription = exports.createSubscription = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Criar uma assinatura entre um comprador e um plano
 */
const createSubscription = (marketplace, body) => {
    return marketplace.post(`/subscriptions`, body, {
        version: 2,
    });
};
exports.createSubscription = createSubscription;
/**
 * Alterar os detalhes de uma assinatura pelo identificador
 */
const updateSubscription = (marketplace, subscriptionId, body) => {
    return marketplace.put(`/subscriptions/${subscriptionId}`, body, { version: 2 });
};
exports.updateSubscription = updateSubscription;
/**
 * Listar os detalhes de uma assinatura pelo identificador
 */
const getSubscriptions = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/subscriptions?${queryString}`, { version: 2 });
};
exports.getSubscriptions = getSubscriptions;
/**
 * Listar detalhes de plano de venda
 */
const getSubscription = (marketplace, subscriptionId) => {
    return marketplace.get(`/subscriptions/${subscriptionId}`, {
        version: 2,
    });
};
exports.getSubscription = getSubscription;
/**
 * Listar assinatura de plano de venda por seller
 */
const getSubscriptionsBySeller = (marketplace, sellerId) => {
    return marketplace.get(`/sellers/${sellerId}/subscriptions`, {
        version: 2,
    });
};
exports.getSubscriptionsBySeller = getSubscriptionsBySeller;
/**
 * Remover uma assinatura pelo identificador
 */
const deleteSubscription = (marketplace, subscriptionId) => {
    return marketplace.delete(`/subscriptions/${subscriptionId}`, {
        version: 2,
    });
};
exports.deleteSubscription = deleteSubscription;
/**
 * Suspender uma assinatura pelo identificador
 */
const suspendSubscription = (marketplace, subscriptionId) => {
    return marketplace.post(`/subscriptions/${subscriptionId}/suspend`, {}, {
        version: 2,
    });
};
exports.suspendSubscription = suspendSubscription;
/**
 * Reativa uma assinatura pelo identificador
 */
const reactivateSubscription = (marketplace, subscriptionId) => {
    return marketplace.post(`/subscriptions/${subscriptionId}/reactivate`, {}, {
        version: 2,
    });
};
exports.reactivateSubscription = reactivateSubscription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3Vic2NyaXB0aW9ucy9zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0Q0FBb0I7QUFPcEI7O0dBRUc7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQ2hDLFdBQXlCLEVBQ3pCLElBQW1CLEVBQ25CLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQ3JCLGdCQUFnQixFQUNoQixJQUFJLEVBQ0o7UUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNYLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVhXLFFBQUEsa0JBQWtCLHNCQVc3QjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxrQkFBa0IsR0FBRyxDQUNoQyxXQUF5QixFQUN6QixjQUFzQixFQUN0QixJQUFtQixFQUNuQixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUNwQixrQkFBa0IsY0FBYyxFQUFFLEVBQ2xDLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBVlcsUUFBQSxrQkFBa0Isc0JBVTdCO0FBRUY7O0dBRUc7QUFDSSxNQUFNLGdCQUFnQixHQUFHLENBQUMsV0FBeUIsRUFBRSxLQUFjLEVBQUUsRUFBRTtJQUM1RSxNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FDcEIsa0JBQWtCLFdBQVcsRUFBRSxFQUMvQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBTlcsUUFBQSxnQkFBZ0Isb0JBTTNCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUM3QixXQUF5QixFQUN6QixjQUFzQixFQUN0QixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFnQixrQkFBa0IsY0FBYyxFQUFFLEVBQUU7UUFDeEUsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFQVyxRQUFBLGVBQWUsbUJBTzFCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLHdCQUF3QixHQUFHLENBQ3RDLFdBQXlCLEVBQ3pCLFFBQWdCLEVBQ2hCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQWdCLFlBQVksUUFBUSxnQkFBZ0IsRUFBRTtRQUMxRSxPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVBXLFFBQUEsd0JBQXdCLDRCQU9uQztBQUNGOztHQUVHO0FBQ0ksTUFBTSxrQkFBa0IsR0FBRyxDQUNoQyxXQUF5QixFQUN6QixjQUFzQixFQUN0QixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFnQixrQkFBa0IsY0FBYyxFQUFFLEVBQUU7UUFDM0UsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFQVyxRQUFBLGtCQUFrQixzQkFPN0I7QUFFRjs7R0FFRztBQUNJLE1BQU0sbUJBQW1CLEdBQUcsQ0FDakMsV0FBeUIsRUFDekIsY0FBc0IsRUFDdEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FDckIsa0JBQWtCLGNBQWMsVUFBVSxFQUMxQyxFQUFFLEVBQ0Y7UUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNYLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVhXLFFBQUEsbUJBQW1CLHVCQVc5QjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxzQkFBc0IsR0FBRyxDQUNwQyxXQUF5QixFQUN6QixjQUFzQixFQUN0QixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUNyQixrQkFBa0IsY0FBYyxhQUFhLEVBQzdDLEVBQUUsRUFDRjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBWFcsUUFBQSxzQkFBc0IsMEJBV2pDIn0=