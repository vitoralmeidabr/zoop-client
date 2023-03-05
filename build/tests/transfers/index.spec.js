"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-return-void */
const transfers_1 = require("../../src/transfers");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 * TODO: "Your user is not authorized to access this resource.",
 */
describe('Transfers Test', () => {
    /**
     * Listar transferências por seller
     */
    test('Listar transferências por seller', async () => {
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, transfers_1.getTransfersBySeller)(index_1.marketplace, sellerId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar transferências por marketplace
     */
    test('Listar transferências por marketplace', async () => {
        const res = await (0, transfers_1.getTransfers)(index_1.marketplace);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Recuperar detalhes de transferência
     */
    test('Recuperar detalhes de transferência', async () => {
        const transferId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, transfers_1.getTransfer)(index_1.marketplace, transferId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Cancelar transferência agendada anteriormente à data prevista para efetivação
     */
    test('Cancelar transferência agendada anteriormente à data prevista para efetivação', async () => {
        const transferId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, transfers_1.cancelTransfer)(index_1.marketplace, transferId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar transações associadas a transferência
     */
    test('Cancelar transferência agendada anteriormente à data prevista para efetivação', async () => {
        const transferId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, transfers_1.getTransferOnTransactions)(index_1.marketplace, transferId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar lançamentos futuros por seller
     */
    test('Listar lançamentos futuros por seller', async () => {
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, transfers_1.getFutureTransfers)(index_1.marketplace, sellerId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3RyYW5zZmVycy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFxSjtBQUNySixvQ0FBdUM7QUFFdkM7OztHQUdHO0FBQ0gsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUM5Qjs7T0FFRztJQUNILElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsRCxNQUFNLFFBQVEsR0FBRyxrQ0FBa0MsQ0FBQztRQUNwRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsZ0NBQW9CLEVBQUMsbUJBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN2RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsd0JBQVksRUFBQyxtQkFBVyxDQUFDLENBQUM7UUFDNUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMscUNBQXFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDckQsTUFBTSxVQUFVLEdBQUcsa0NBQWtDLENBQUM7UUFDdEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLHVCQUFXLEVBQUMsbUJBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNGLElBQUksQ0FBQywrRUFBK0UsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoRyxNQUFNLFVBQVUsR0FBRyxrQ0FBa0MsQ0FBQztRQUN0RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsMEJBQWMsRUFBQyxtQkFBVyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0YsSUFBSSxDQUFDLCtFQUErRSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2hHLE1BQU0sVUFBVSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxxQ0FBeUIsRUFBQyxtQkFBVyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0YsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hELE1BQU0sUUFBUSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3BELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSw4QkFBa0IsRUFBQyxtQkFBVyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=