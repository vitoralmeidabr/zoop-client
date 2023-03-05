"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const balances_1 = require("../../src/balances");
/* Marketplace Tests API
 */
describe('Balances Test', () => {
    /**
     * Lista contas por buyer
     */
    test('Lista contas por buyer', async () => {
        const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
        const res = await (0, balances_1.getBalanceByBuyer)(__1.marketplace, buyerId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar histórico de lançamentos pelo identificador da conta
     */
    test('Listar histórico de lançamentos pelo identificador da conta', async () => {
        const balanceId = '4040eb7f4b384cebbafb052f93de838e';
        const res = await (0, balances_1.getHistoryBalance)(__1.marketplace, balanceId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Recuperar saldo de conta por seller
     */
    test('Recuperar saldo de conta por seller', async () => {
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, balances_1.getBalanceBySeller)(__1.marketplace, sellerId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar histórico de lançamentos de conta por buyer
     */
    test('Listar histórico de lançamentos de conta por buyer', async () => {
        const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
        const res = await (0, balances_1.getHistoryBalanceByBuyer)(__1.marketplace, buyerId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar histórico de lançamentos de conta por seller
     */
    test('Listar histórico de lançamentos de conta por seller', async () => {
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, balances_1.getHistoryBalanceBySeller)(__1.marketplace, sellerId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL2JhbGFuY2VzL2luZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4Qzs7QUFFOUMsMEJBQWlDO0FBQ2pDLGlEQU00QjtBQUU1QjtHQUNHO0FBQ0gsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDN0I7O09BRUc7SUFFSCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDeEMsTUFBTSxPQUFPLEdBQUcsa0NBQWtDLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLDRCQUFpQixFQUFDLGVBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUVILElBQUksQ0FBQyw2REFBNkQsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM3RSxNQUFNLFNBQVMsR0FBRyxrQ0FBa0MsQ0FBQztRQUNyRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsNEJBQWlCLEVBQUMsZUFBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBRUgsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JELE1BQU0sUUFBUSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3BELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSw2QkFBa0IsRUFBQyxlQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFFSCxJQUFJLENBQUMsb0RBQW9ELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEUsTUFBTSxPQUFPLEdBQUcsa0NBQWtDLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG1DQUF3QixFQUFDLGVBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUVILElBQUksQ0FBQyxxREFBcUQsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyRSxNQUFNLFFBQVEsR0FBRyxrQ0FBa0MsQ0FBQztRQUNwRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsb0NBQXlCLEVBQUMsZUFBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=