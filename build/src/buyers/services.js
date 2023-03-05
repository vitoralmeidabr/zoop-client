"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBuyer = exports.createBuyer = exports.searchBuyer = exports.deleteBuyer = exports.getBuyers = exports.getBuyer = void 0;
const qs_1 = __importDefault(require("qs"));
const validations_1 = require("./validations");
/**
 * Get Buyer
 */
const getBuyer = (marketplace, buyerId) => {
    return marketplace.get(`/buyers/${buyerId}`);
};
exports.getBuyer = getBuyer;
/**
 * Get All Buyers
 */
const getBuyers = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/buyers?${queryString}`);
};
exports.getBuyers = getBuyers;
/**
 * Delete Buyer
 */
const deleteBuyer = (marketplace, buyerId) => {
    return marketplace.delete(`/buyers/${buyerId}`);
};
exports.deleteBuyer = deleteBuyer;
/**
 * Search Seller Individuals | Business
 */
const searchBuyer = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/buyers/search?${queryString}`);
};
exports.searchBuyer = searchBuyer;
/**
 * Create Buyer
 */
const createBuyer = (marketplace, body) => {
    validations_1.buyerScheme.validateSync(body);
    return marketplace.post(`/buyers`, body);
};
exports.createBuyer = createBuyer;
/**
 * Update Buyer
 */
const updateBuyer = (marketplace, buyer_id, body) => {
    validations_1.buyerScheme.validateSync(body);
    return marketplace.put(`/buyers/${buyer_id}`, body);
};
exports.updateBuyer = updateBuyer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnV5ZXJzL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQU9wQiwrQ0FBNEM7QUFDNUM7O0dBRUc7QUFDSSxNQUFNLFFBQVEsR0FBRyxDQUFDLFdBQXlCLEVBQUUsT0FBZSxFQUFFLEVBQUU7SUFDckUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFTLFdBQVcsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUM7QUFGVyxRQUFBLFFBQVEsWUFFbkI7QUFDRjs7R0FFRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQUMsV0FBeUIsRUFBRSxLQUFjLEVBQUUsRUFBRTtJQUNyRSxNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBb0IsV0FBVyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUhXLFFBQUEsU0FBUyxhQUdwQjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxXQUFXLEdBQUcsQ0FBQyxXQUF5QixFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQ3hFLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBVSxXQUFXLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFdBQVcsR0FBRyxDQUN6QixXQUF5QixFQUN6QixLQUFvQixFQUNwQixFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQVMsa0JBQWtCLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBTlcsUUFBQSxXQUFXLGVBTXRCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFdBQVcsR0FBRyxDQUFDLFdBQXlCLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDckUseUJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFpQixTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBSFcsUUFBQSxXQUFXLGVBR3RCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFdBQVcsR0FBRyxDQUN6QixXQUF5QixFQUN6QixRQUFnQixFQUNoQixJQUFZLEVBQ1osRUFBRTtJQUNGLHlCQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBaUIsV0FBVyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFQVyxRQUFBLFdBQVcsZUFPdEIifQ==