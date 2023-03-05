"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWebHooks = exports.getWebHook = exports.getWebHooks = exports.createWebHooks = void 0;
/**
 * Criar webhook por marketplace
 */
const createWebHooks = (marketplace, body) => {
    return marketplace.post(`/webhooks`, body);
};
exports.createWebHooks = createWebHooks;
/**
 * Listar webhooks por marketplace
 */
const getWebHooks = (marketplace) => {
    return marketplace.get(`/webhooks`);
};
exports.getWebHooks = getWebHooks;
/**
 * Recuperar detalhes de webhook
 */
const getWebHook = (marketplace, webhookId) => {
    return marketplace.get(`/webhooks/${webhookId}`);
};
exports.getWebHook = getWebHook;
/**
 * Remover webhook
 */
const deleteWebHooks = (marketplace, webhookId) => {
    return marketplace.delete(`/webhooks/${webhookId}`);
};
exports.deleteWebHooks = deleteWebHooks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2ViaG9vay9zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQTs7R0FFRztBQUNJLE1BQU0sY0FBYyxHQUFHLENBQUMsV0FBeUIsRUFBRSxJQUFlLEVBQUUsRUFBRTtJQUMzRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUZXLFFBQUEsY0FBYyxrQkFFekI7QUFDRjs7R0FFRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsV0FBeUIsRUFBRSxFQUFFO0lBQ3ZELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFGVyxRQUFBLFdBQVcsZUFFdEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBeUIsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDekUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUM7QUFGVyxRQUFBLFVBQVUsY0FFckI7QUFFRjs7R0FFRztBQUNJLE1BQU0sY0FBYyxHQUFHLENBQzVCLFdBQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQztBQUxXLFFBQUEsY0FBYyxrQkFLekIifQ==