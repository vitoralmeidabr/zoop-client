"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoleto = exports.sendBoletoByEmail = void 0;
/**
 * Enviar cobrança de boleto por email
 */
const sendBoletoByEmail = (marketplace, boletoId) => {
    return marketplace.post(`/boletos/${boletoId}/emails`, {});
};
exports.sendBoletoByEmail = sendBoletoByEmail;
/**
 * Listar detalhes de boleto
 */
const getBoleto = (marketplace, boletoId) => {
    return marketplace.get(`/boletos/${boletoId}`);
};
exports.getBoleto = getBoleto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYm9sZXRvcy9zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQTs7R0FFRztBQUNJLE1BQU0saUJBQWlCLEdBQUcsQ0FDL0IsV0FBeUIsRUFDekIsUUFBZ0IsRUFDaEIsRUFBRTtJQUNGLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBb0IsWUFBWSxRQUFRLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUM7QUFMVyxRQUFBLGlCQUFpQixxQkFLNUI7QUFDRjs7R0FFRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQUMsV0FBeUIsRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDdkUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFVLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFGVyxRQUFBLFNBQVMsYUFFcEIifQ==