"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-return-void */
const adjustments_1 = require("../../src/adjustments");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 * TODO: "Your user is not authorized to access this resource.",
 */
describe('Ajustments Test', () => {
    /**
     * Criar ajuste de cobrança informando pagador e recebedor
     */
    test('Criar ajuste de cobrança informando pagador e recebedor', async () => {
        const ownerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const receiverId = 'c6809a3b93ec47cb98afc80a010b3792';
        const body = {
            amount: 10000,
            description: "Cobrança de Mensalidade",
            transfer_date: new Date()
        };
        const res = await (0, adjustments_1.createAjustment)(index_1.marketplace, ownerId, receiverId, body);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Criar ajuste de cobrança informando somente pagador
     */
    test('Criar ajuste de cobrança informando somente pagador', async () => {
        const ownerId = '51e9822d1ab74ad0a621d211b8392022';
        const body = {
            amount: 10000,
            description: "Cobrança de Mensalidade",
            transfer_date: new Date()
        };
        const res = await (0, adjustments_1.createAjustmentOwner)(index_1.marketplace, ownerId, body);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar ajustes de cobrança por marketplace
     */
    test('Listar ajustes de cobrança por marketplace', async () => {
        const res = await (0, adjustments_1.getAjustments)(index_1.marketplace);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Recuperar detalhes de ajuste de cobrança
     */
    test('Recuperar detalhes de ajuste de cobrança', async () => {
        const ajustmentId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, adjustments_1.getAjustment)(index_1.marketplace, ajustmentId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar transações associadas a transferência
     */
    test('Cancelar ajuste de cobrança agendado anteriormente à data prevista para efetivação', async () => {
        const ajustmentId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, adjustments_1.cancelAjustment)(index_1.marketplace, ajustmentId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL2FqdXN0bWVudHMvaW5kZXguc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE4QztBQUM5Qyx1REFBd0k7QUFDeEksb0NBQXVDO0FBRXZDOzs7R0FHRztBQUNILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0I7O09BRUc7SUFDSCxJQUFJLENBQUMseURBQXlELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDekUsTUFBTSxPQUFPLEdBQUcsa0NBQWtDLENBQUM7UUFDbkQsTUFBTSxVQUFVLEdBQUcsa0NBQWtDLENBQUM7UUFDdEQsTUFBTSxJQUFJLEdBQWU7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLElBQUksRUFBRTtTQUM1QixDQUFBO1FBQ0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLDZCQUFlLEVBQUMsbUJBQVcsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLHFEQUFxRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLGtDQUFrQyxDQUFDO1FBQ25ELE1BQU0sSUFBSSxHQUFlO1lBQ3JCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxhQUFhLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDNUIsQ0FBQTtRQUNELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxrQ0FBb0IsRUFBQyxtQkFBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM1RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsMkJBQWEsRUFBQyxtQkFBVyxDQUFDLENBQUM7UUFDN0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDRixJQUFJLENBQUMsMENBQTBDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDM0QsTUFBTSxXQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLDBCQUFZLEVBQUMsbUJBQVcsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNGLElBQUksQ0FBQyxvRkFBb0YsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyRyxNQUFNLFdBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUN2RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsNkJBQWUsRUFBQyxtQkFBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=