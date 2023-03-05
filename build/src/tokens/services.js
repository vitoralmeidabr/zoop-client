"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attchCard = exports.deleteCard = exports.getCard = exports.createCardToken = void 0;
const validations_1 = require("./validations");
/**
 * Criar novo token de cartão
 */
const createCardToken = (marketplace, body) => {
    validations_1.cardScheme.validateSync(body);
    return marketplace.post(`/cards/tokens`, body);
};
exports.createCardToken = createCardToken;
/**
 * Remover cartão pelo identificador
 */
const getCard = (marketplace, cardId) => {
    return marketplace.get(`/cards/${cardId}`);
};
exports.getCard = getCard;
/**
 * Remover cartão pelo identificador
 */
const deleteCard = (marketplace, cardId) => {
    return marketplace.delete(`/cards/${cardId}`);
};
exports.deleteCard = deleteCard;
/**
 * Associar cartão com comprador
 */
const attchCard = (marketplace, customer, token) => {
    return marketplace.post(`/cards`, {
        customer,
        token,
    });
};
exports.attchCard = attchCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdG9rZW5zL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLCtDQUEyQztBQUUzQzs7R0FFRztBQUNJLE1BQU0sZUFBZSxHQUFHLENBQUMsV0FBeUIsRUFBRSxJQUFXLEVBQUUsRUFBRTtJQUN4RSx3QkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQW9CLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFIVyxRQUFBLGVBQWUsbUJBRzFCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLE9BQU8sR0FBRyxDQUFDLFdBQXlCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDbkUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFVLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUM7QUFGVyxRQUFBLE9BQU8sV0FFbEI7QUFDRjs7R0FFRztBQUNJLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBeUIsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUN0RSxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQVUsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQztBQUZXLFFBQUEsVUFBVSxjQUVyQjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxTQUFTLEdBQUcsQ0FDdkIsV0FBeUIsRUFDekIsUUFBZ0IsRUFDaEIsS0FBYSxFQUNiLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQXNCLFFBQVEsRUFBRTtRQUNyRCxRQUFRO1FBQ1IsS0FBSztLQUNOLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVRXLFFBQUEsU0FBUyxhQVNwQiJ9