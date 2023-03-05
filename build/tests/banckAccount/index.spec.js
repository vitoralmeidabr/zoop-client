"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const bankAccount_1 = require("../../src/bankAccount");
const index_1 = require("../index");
// 3e8071ce177e4d0c891edb7150a4932f; token
// 0757628e12fa4b8c8fd1a1b6515672df;bank id
/**
 * Marketplace Tests API
 */
describe('Banck Account Test', () => {
    /**
     * Criar novo token de conta bancária
     */
    test('Criar novo token de conta bancária', async () => {
        const res = await (0, bankAccount_1.createBankAccount)(index_1.marketplace, index_1.bankAccount);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Associar conta bancaria ao customer
     */
    test('Associar conta bancaria ao customer', async () => {
        //customerId: Seller | Buyer
        const customerId = '2c856c75555c48b0ae6050cd76797fcd';
        const tokenId = '3e8071ce177e4d0c891edb7150a4932f';
        const res = await (0, bankAccount_1.attachBankAccount)(index_1.marketplace, tokenId, customerId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Listar contas bancárias por marketplace
     * Lista todas as contas, ativas e inativas
     */
    test('Listar contas bancárias por marketplace', async () => {
        const res = await (0, bankAccount_1.getBankAccounts)(index_1.marketplace);
        const data = res.data;
        expect(data.total).toBeGreaterThanOrEqual(0);
    });
    /**
     * Listar contas bancárias por seller
     */
    test('Listar contas bancárias por seller', async () => {
        const customerId = '2c856c75555c48b0ae6050cd76797fcd';
        const res = await (0, bankAccount_1.getBankAccountBySeller)(index_1.marketplace, customerId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Listar detalhes de conta bancária por identificador
     */
    test('Listar detalhes de conta bancária por identificador', async () => {
        const bankAccountId = '963703f46d9846809e5e0bf05a18a067';
        const res = await (0, bankAccount_1.getBankAccount)(index_1.marketplace, bankAccountId);
        const data = res.data;
        expect(data.id).toBe(bankAccountId);
    });
    /**
     * Remover conta bancária
     * Obs: Não remove, apenas desabilita
     */
    test('Remover conta bancária', async () => {
        const bankAccountId = '963703f46d9846809e5e0bf05a18a067';
        const res = await (0, bankAccount_1.deleteBankAccount)(index_1.marketplace, bankAccountId);
        const data = res.data;
        expect(data.id).toBe(bankAccountId);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL2JhbmNrQWNjb3VudC9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7O0FBRTlDLHVEQU8rQjtBQUMvQixvQ0FBb0Q7QUFDcEQsMENBQTBDO0FBQzFDLDJDQUEyQztBQUMzQzs7R0FFRztBQUNILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFDbEM7O09BRUc7SUFFSCxJQUFJLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLCtCQUFpQixFQUFDLG1CQUFXLEVBQUUsbUJBQVcsQ0FBQyxDQUFDO1FBQzlELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyRCw0QkFBNEI7UUFFNUIsTUFBTSxVQUFVLEdBQUcsa0NBQWtDLENBQUM7UUFDdEQsTUFBTSxPQUFPLEdBQUcsa0NBQWtDLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLCtCQUFpQixFQUFDLG1CQUFXLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7O09BR0c7SUFFSCxJQUFJLENBQUMseUNBQXlDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLDZCQUFlLEVBQUMsbUJBQVcsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBRUgsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3BELE1BQU0sVUFBVSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxvQ0FBc0IsRUFBQyxtQkFBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyxxREFBcUQsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyRSxNQUFNLGFBQWEsR0FBRyxrQ0FBa0MsQ0FBQztRQUN6RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsNEJBQWMsRUFBQyxtQkFBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7O09BR0c7SUFDSCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDeEMsTUFBTSxhQUFhLEdBQUcsa0NBQWtDLENBQUM7UUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLCtCQUFpQixFQUFDLG1CQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=