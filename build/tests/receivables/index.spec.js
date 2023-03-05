"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const receivables_1 = require("../../src/receivables");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Recebiveis Test', () => {
    /**
     * Listar detalhes de recebível
     */
    test('Listar detalhes de recebível', async () => {
        const receivableId = '9a33e7be49c441bd8965740bd6d90737';
        const res = await (0, receivables_1.getReceivable)(index_1.marketplace, receivableId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Listar recebíveis por transação
     */
    test('Listar recebíveis por transação', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const res = await (0, receivables_1.getReceivableByTransaction)(index_1.marketplace, transactionId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar recebíveis por seller
     */
    test('Listar recebíveis por seller', async () => {
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, receivables_1.getReceivableBySeller)(index_1.marketplace, sellerId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3JlY2VpdmFibGVzL2luZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4Qzs7QUFFOUMsdURBSStCO0FBQy9CLG9DQUF1QztBQUV2Qzs7R0FFRztBQUNILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0I7O09BRUc7SUFDSCxJQUFJLENBQUMsOEJBQThCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDOUMsTUFBTSxZQUFZLEdBQUcsa0NBQWtDLENBQUM7UUFDeEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLDJCQUFhLEVBQUMsbUJBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMzRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakQsTUFBTSxhQUFhLEdBQUcsa0NBQWtDLENBQUM7UUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLHdDQUEwQixFQUFDLG1CQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDekUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMsOEJBQThCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDOUMsTUFBTSxRQUFRLEdBQUcsa0NBQWtDLENBQUM7UUFDcEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG1DQUFxQixFQUFDLG1CQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==