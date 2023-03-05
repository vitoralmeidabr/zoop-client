"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMcCodes = exports.updateBusiness = exports.createBusiness = exports.updateIndividual = exports.createIndividual = exports.downloadDocument = exports.getDocuments = exports.deleteSeller = exports.getSellers = exports.searchSeller = exports.getSeller = void 0;
/* eslint-disable functional/no-throw-statement */
const qs_1 = __importDefault(require("qs"));
const validations_1 = require("./validations");
/**
 * Get Seller Individuals | Business
 */
const getSeller = (marketplace, sellerId) => {
    return marketplace.get(`/sellers/${sellerId}`);
};
exports.getSeller = getSeller;
/**
 * Search Seller Individuals | Business
 */
const searchSeller = (marketplace, query) => {
    if (!query)
        throw new Error('query is not valid');
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/search?${queryString}`);
};
exports.searchSeller = searchSeller;
/**
 * Get Seller Individuals | Business
 */
const getSellers = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers?${queryString}`);
};
exports.getSellers = getSellers;
/**
 * Delete Seller Individuals | Business
 */
const deleteSeller = (marketplace, sellerId) => {
    return marketplace.delete(`/sellers/${sellerId}`);
};
exports.deleteSeller = deleteSeller;
/**
 * Get Seller Individuals | Business
 */
const getDocuments = (marketplace, sellerId, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/sellers/${sellerId}/documents?${queryString}`);
};
exports.getDocuments = getDocuments;
/**
 * Download Seller Document
 */
const downloadDocument = (marketplace, documentId) => {
    return marketplace.get(`/documents/${documentId}/file`);
};
exports.downloadDocument = downloadDocument;
//TODO: Create uploadDocument
/**
 * Upload Seller Document
 */
// export const uploadDocument = (
//   marketplace: IMarketplace,
//   query: IQueryDocument
// ) => {
//   throw new Error('Not implemented');
// };
/**
 * Create Seller Individual
 */
const createIndividual = (marketplace, body) => {
    validations_1.sellerScheme.validateSync(body);
    return marketplace.post(`/sellers/individuals`, body);
};
exports.createIndividual = createIndividual;
/**
 * Update Seller Individual
 */
const updateIndividual = (marketplace, seller_id, body) => {
    validations_1.sellerScheme.validateSync(body);
    return marketplace.put(`/sellers/individuals/${seller_id}`, body);
};
exports.updateIndividual = updateIndividual;
/**
 * Create Seller Business
 */
const createBusiness = (marketplace, body) => {
    validations_1.businessScheme.validateSync(body);
    return marketplace.post(`/sellers/businesses`, body);
};
exports.createBusiness = createBusiness;
/**
 * Update Seller Business
 */
const updateBusiness = (marketplace, seller_id, body) => {
    validations_1.businessScheme.validateSync(body);
    return marketplace.put(`/sellers/businesses/${seller_id}`, body);
};
exports.updateBusiness = updateBusiness;
/**
 * Get McCodes
 */
const getMcCodes = (marketplace) => {
    return marketplace.get(`/merchant_category_codes`, {
        absolute: true,
    });
};
exports.getMcCodes = getMcCodes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VsbGVycy9zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBa0Q7QUFDbEQsNENBQW9CO0FBTXBCLCtDQUE2RDtBQUU3RDs7R0FFRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQUMsV0FBeUIsRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDdkUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFzQixZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBRlcsUUFBQSxTQUFTLGFBRXBCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFlBQVksR0FBRyxDQUFDLFdBQXlCLEVBQUUsS0FBZSxFQUFFLEVBQUU7SUFDekUsSUFBSSxDQUFDLEtBQUs7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEQsTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQztBQUpXLFFBQUEsWUFBWSxnQkFJdkI7QUFDRjs7R0FFRztBQUNJLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBeUIsRUFBRSxLQUFjLEVBQUUsRUFBRTtJQUN0RSxNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FDcEIsWUFBWSxXQUFXLEVBQUUsQ0FDMUIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUxXLFFBQUEsVUFBVSxjQUtyQjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxZQUFZLEdBQUcsQ0FBQyxXQUF5QixFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUMxRSxPQUFPLFdBQVcsQ0FBQyxNQUFN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