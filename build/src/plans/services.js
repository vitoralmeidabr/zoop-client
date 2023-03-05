"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlan = exports.updatePlan = exports.getPlan = exports.getPlans = exports.createPlan = void 0;
const qs_1 = __importDefault(require("qs"));
/**
 * Criar um plano
 */
const createPlan = (marketplace, body) => {
    return marketplace.post(`/plans`, body, { version: 2 });
};
exports.createPlan = createPlan;
/**
 * Listar plano de vendas por marketplace
 */
const getPlans = (marketplace, query) => {
    const queryString = qs_1.default.stringify(query);
    return marketplace.get(`/plans?${queryString}`, {
        version: 2,
    });
};
exports.getPlans = getPlans;
/**
 * Listar detalhes de plano de venda
 */
const getPlan = (marketplace, planId) => {
    return marketplace.get(`/plans/${planId}`, { version: 2 });
};
exports.getPlan = getPlan;
/**
 * Alterar plano pelo identificador
 */
const updatePlan = (marketplace, planId, body) => {
    return marketplace.put(`/plans/${planId}`, body, { version: 2 });
};
exports.updatePlan = updatePlan;
/**
 * Alterar plano pelo identificador
 */
const deletePlan = (marketplace, planId) => {
    return marketplace.delete(`/plans/${planId}`, { version: 2 });
};
exports.deletePlan = deletePlan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhbnMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBTXBCOztHQUVHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FBQyxXQUF5QixFQUFFLElBQVcsRUFBRSxFQUFFO0lBQ25FLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxVQUFVLGNBRXJCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFFBQVEsR0FBRyxDQUFDLFdBQXlCLEVBQUUsS0FBYyxFQUFFLEVBQUU7SUFDcEUsTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQW1CLFVBQVUsV0FBVyxFQUFFLEVBQUU7UUFDaEUsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFMVyxRQUFBLFFBQVEsWUFLbkI7QUFDRjs7R0FFRztBQUNJLE1BQU0sT0FBTyxHQUFHLENBQUMsV0FBeUIsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUNuRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQVEsVUFBVSxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUZXLFFBQUEsT0FBTyxXQUVsQjtBQUNGOztHQUVHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FDeEIsV0FBeUIsRUFDekIsTUFBYyxFQUNkLElBQVcsRUFDWCxFQUFFO0lBQ0YsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBTlcsUUFBQSxVQUFVLGNBTXJCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFVBQVUsR0FBRyxDQUFDLFdBQXlCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDdEUsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUFGVyxRQUFBLFVBQVUsY0FFckIifQ==