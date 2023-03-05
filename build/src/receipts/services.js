"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHtmlReceipt = exports.updateReceipt = exports.getReceipt = exports.sendReceipt = exports.sendReceiptBySMS = exports.sendReceiptByEmail = void 0;
/**
 * Enviar recibo por E-mail
 */
const sendReceiptByEmail = (marketplace, receiptId, email) => {
    return marketplace.post(`/receipts/${receiptId}/emails`, { to: email });
};
exports.sendReceiptByEmail = sendReceiptByEmail;
/**
 * Enviar recibo por SMS
 */
const sendReceiptBySMS = (marketplace, receiptId, phone //TODO: validate phone
) => {
    return marketplace.post(`/receipts/${receiptId}/texts`, { to: phone });
};
exports.sendReceiptBySMS = sendReceiptBySMS;
/**
 * Enviar recibo por SMS e E-mail
 */
const sendReceipt = (marketplace, receiptId) => {
    return marketplace.post(`/receipts/${receiptId}/send`, {});
};
exports.sendReceipt = sendReceipt;
/**
 * Alterar detalhes do recibo
 */
const getReceipt = (marketplace, receiptId) => {
    return marketplace.get(`/receipts/${receiptId}`, {});
};
exports.getReceipt = getReceipt;
/**
 * Listar detalhes do recibo
 */
const updateReceipt = (marketplace, receiptId) => {
    return marketplace.get(`/receipts/${receiptId}`, {});
};
exports.updateReceipt = updateReceipt;
/**
 * Listar detalhes do recibo
 */
const renderHtmlReceipt = (marketplace, receiptId) => {
    return marketplace.get(`/receipts/${marketplace.getId()}/${receiptId}/`, {});
};
exports.renderHtmlReceipt = renderHtmlReceipt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVjZWlwdHMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7O0dBRUc7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQ2hDLFdBQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMxRSxDQUFDLENBQUM7QUFOVyxRQUFBLGtCQUFrQixzQkFNN0I7QUFDRjs7R0FFRztBQUNJLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDOUIsV0FBeUIsRUFDekIsU0FBaUIsRUFDakIsS0FBYSxDQUFDLHNCQUFzQjtFQUNwQyxFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN6RSxDQUFDLENBQUM7QUFOVyxRQUFBLGdCQUFnQixvQkFNM0I7QUFDRjs7R0FFRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsV0FBeUIsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDMUUsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBRUY7O0dBRUc7QUFDSSxNQUFNLFVBQVUsR0FBRyxDQUFDLFdBQXlCLEVBQUUsU0FBaUIsRUFBRSxFQUFFO0lBQ3pFLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUZXLFFBQUEsVUFBVSxjQUVyQjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxXQUF5QixFQUFFLFNBQWlCLEVBQUUsRUFBRTtJQUM1RSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUM7QUFGVyxRQUFBLGFBQWEsaUJBRXhCO0FBRUY7O0dBRUc7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFdBQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFDO0FBTFcsUUFBQSxpQkFBaUIscUJBSzVCIn0=