"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const split_1 = require("../../src/split");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 * TODO: "Your user is not authorized to access this resource.",
 */
describe('Split Test', () => {
    /**
     * Listar detalhes de Split por transação
     */
    test('Listar detalhes de Split por transação', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const res = await (0, split_1.getSplitRulesByTransaction)(index_1.marketplace, transactionId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Criar Split por transação
     */
    test('Criar Split por transação', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const body = {
            recipient: '51e9822d1ab74ad0a621d211b8392022',
            charge_processing_fee: 'true',
            percentage: 50,
            liable: true,
        };
        const res = await (0, split_1.createSplit)(index_1.marketplace, transactionId, body);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Recupera detalhes de Split por ID
     */
    test('Recupera detalhes de Split por ID', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const splitId = '51e9822d1ab74ad0a621d211b8392022';
        const res = await (0, split_1.getSplitByTransaction)(index_1.marketplace, transactionId, splitId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Alterar Split por transação
     */
    test('Alterar Split por transação', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const splitId = '51e9822d1ab74ad0a621d211b8392022';
        const body = {
            recipient: '51e9822d1ab74ad0a621d211b8392022',
            charge_processing_fee: 'true',
            percentage: 50,
            liable: true,
        };
        const res = await (0, split_1.updateSplitByTransaction)(index_1.marketplace, transactionId, splitId, body);
        const data = res.data;
        expect(data).not.toBeNull();
    });
    /**
     * Remover Split por transação
     */
    test('Remover Split por transação', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const splitId = '51e9822d1ab74ad0a621d211b8392022';
        const res = await (0, split_1.deleteSplitByTransaction)(index_1.marketplace, transactionId, splitId);
        const data = res.data;
        expect(data).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3NwbGl0L2luZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4Qzs7QUFFOUMsMkNBT3lCO0FBQ3pCLG9DQUF1QztBQUV2Qzs7O0dBR0c7QUFDSCxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUMxQjs7T0FFRztJQUNILElBQUksQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN4RCxNQUFNLGFBQWEsR0FBRyxrQ0FBa0MsQ0FBQztRQUN6RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsa0NBQTBCLEVBQUMsbUJBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6RSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQywyQkFBMkIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzQyxNQUFNLGFBQWEsR0FBRyxrQ0FBa0MsQ0FBQztRQUN6RCxNQUFNLElBQUksR0FBcUI7WUFDN0IsU0FBUyxFQUFFLGtDQUFrQztZQUM3QyxxQkFBcUIsRUFBRSxNQUFNO1lBQzdCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG1CQUFXLEVBQUMsbUJBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMsbUNBQW1DLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbkQsTUFBTSxhQUFhLEdBQUcsa0NBQWtDLENBQUM7UUFDekQsTUFBTSxPQUFPLEdBQUcsa0NBQWtDLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLDZCQUFxQixFQUNyQyxtQkFBVyxFQUNYLGFBQWEsRUFDYixPQUFPLENBQ1IsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzdDLE1BQU0sYUFBYSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3pELE1BQU0sT0FBTyxHQUFHLGtDQUFrQyxDQUFDO1FBQ25ELE1BQU0sSUFBSSxHQUFxQjtZQUM3QixTQUFTLEVBQUUsa0NBQWtDO1lBQzdDLHFCQUFxQixFQUFFLE1BQU07WUFDN0IsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQ3hDLG1CQUFXLEVBQ1gsYUFBYSxFQUNiLE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzdDLE1BQU0sYUFBYSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3pELE1BQU0sT0FBTyxHQUFHLGtDQUFrQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDeEMsbUJBQVcsRUFDWCxhQUFhLEVBQ2IsT0FBTyxDQUNSLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9