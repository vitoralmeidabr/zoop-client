"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTerminal = exports.pairingTerminal = void 0;
/**
 * Parear terminal POS
 */
const pairingTerminal = (marketplace, token, isStaging) => {
    return marketplace.post(`/terminals/pairing`, { token, isStaging });
};
exports.pairingTerminal = pairingTerminal;
/**
 * Buscar informações sobre terminal
 */
const getTerminal = (marketplace, terminalId) => {
    return marketplace.get(`/card-present/terminals/${terminalId}`, {
        absolute: true,
    });
};
exports.getTerminal = getTerminal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVybWluYWxzL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOztHQUVHO0FBQ0ksTUFBTSxlQUFlLEdBQUcsQ0FDN0IsV0FBeUIsRUFDekIsS0FBYSxFQUNiLFNBQWtCLEVBQ2xCLEVBQUU7SUFDRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFOVyxRQUFBLGVBQWUsbUJBTTFCO0FBQ0Y7O0dBRUc7QUFDSSxNQUFNLFdBQVcsR0FBRyxDQUFDLFdBQXlCLEVBQUUsVUFBa0IsRUFBRSxFQUFFO0lBQzNFLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBWSwyQkFBMkIsVUFBVSxFQUFFLEVBQUU7UUFDekUsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFKVyxRQUFBLFdBQVcsZUFJdEIifQ==