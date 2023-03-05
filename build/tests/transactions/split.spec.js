"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const transactions_1 = require("../../src/transactions");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Transactions Split Test', () => {
    /**
     * Criar transação por pix com split
     * TODO: Pendente ativação
     */
    test('Criar transação por pix com split', async () => {
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            amount: 1000,
        };
        const res = await (0, transactions_1.createPixTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Criar transação por boleto simples  e split
     */
    test('Criar transação por boleto simples e split', async () => {
        const splitRule = {
            recipient: '51e9822d1ab74ad0a621d211b8392022',
            percentage: 50,
            liable: true,
            charge_processing_fee: '0',
            charge_recipient_processing_fee: '1',
        };
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            customer: '2c856c75555c48b0ae6050cd76797fcd',
            amount: 23880,
            reference_id: 'Venda com Split de Pagamento',
            split_rules: [splitRule],
        };
        const res = await (0, transactions_1.createBoletoTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Criar transação por card token com split
     */
    test('Criar transação por card token com split', async () => {
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            reference_id: '0142',
            installment_plan: {
                number_installments: 1,
            },
            source: {
                amount: 140000,
                card: {
                    id: 'da99c7124e2c446c86c8234ef8bcad26',
                },
            },
        };
        const res = await (0, transactions_1.createCardTokenTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Criar transação por autorizacao direta com split
     */
    test('Criar transação por autorizacao direta com split', async () => {
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            reference_id: '0142',
            installment_plan: {
                number_installments: 1,
            },
            source: {
                amount: 12500,
                card: {
                    holder_name: 'Maria Silva',
                    card_number: '5138692036125449',
                    expiration_month: '01',
                    expiration_year: '2028',
                    security_code: '123',
                },
            },
        };
        const res = await (0, transactions_1.createDirectTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Criar transação por customer Id com split
     */
    test('Criar transação por customer com split', async () => {
        const splitRule = {
            recipient: '51e9822d1ab74ad0a621d211b8392022',
            percentage: 50,
            liable: true,
            charge_processing_fee: '0',
            charge_recipient_processing_fee: '1',
        };
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            reference_id: '0142',
            amount: 23880,
            installment_plan: {
                number_installments: 12,
            },
            statement_descriptor: 'OkaPlay',
            customer: '2c856c75555c48b0ae6050cd76797fcd',
            split_rules: [splitRule],
        };
        const res = await (0, transactions_1.createCustomerTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Listar detalhes de transação pelo identificador com split
     */
    test('Listar detalhes de transação pelo identificador com split', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const res = await (0, transactions_1.getTransaction)(index_1.marketplace, transactionId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * LListar transações do marketplace com split
     */
    test('Listar transações do marketplace com split', async () => {
        const res = await (0, transactions_1.getTransactions)(index_1.marketplace);
        const data = res.data;
        expect(data.uri).not.toBeNull();
    }, 10000);
    /**
     * Listar transações por vendedor com split
     */
    test('Listar transações por vendedor com split', async () => {
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, transactions_1.getTransactionsBySeller)(index_1.marketplace, sellerId);
        const data = res.data;
        expect(data.items).not.toBeNull();
    });
    /**
     * Disponibilizar link carta de cancelamento com split
     * TODO: API não está funcionando
     * Error: endpoint_not_found
     */
    test('Disponibilizar link carta de cancelamento com split', async () => {
        const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
        const res = await (0, transactions_1.cancelledLetterTransaction)(index_1.marketplace, transactionId);
        const data = res.data;
        expect(data.url).not.toBeNull();
    });
    /**
     * Estornar transação cartão não presente com split
     */
    test('Estornar transação cartão não presente com split', async () => {
        const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const amount = 1000000;
        const res = await (0, transactions_1.chargebackTransaction)(index_1.marketplace, transactionId, sellerId, amount);
        const data = res.data;
        expect(data.refunded).not.toBeNull();
    });
    /**
     * Capturar transação cartão não presente com split
     */
    test('Capturar transação cartão não presente com split', async () => {
        const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const amount = 10000;
        const res = await (0, transactions_1.captureTransaction)(index_1.marketplace, transactionId, sellerId, amount);
        const data = res.data;
        expect(data.refunded).not.toBeNull();
    });
    /**
     * Aprovar transação boleto simples com split
     */
    test('Aprovar transação boleto com split', async () => {
        const transactionId = '87ce68326fee4d1fb85174c3657726a7';
        const res = await (0, transactions_1.approveTransaction)(index_1.marketplace, transactionId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3RyYW5zYWN0aW9ucy9zcGxpdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7O0FBRzlDLHlEQUFrYTtBQUNsYSxvQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSCxRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDOzs7T0FHRztJQUNILElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNuRCxNQUFNLFdBQVcsR0FBb0I7WUFDbkMsWUFBWSxFQUFFLGtDQUFrQztZQUNoRCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsbUNBQW9CLEVBQUMsbUJBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNqRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMsNENBQTRDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDNUQsTUFBTSxTQUFTLEdBQThCO1lBQzNDLFNBQVMsRUFBRSxrQ0FBa0M7WUFDN0MsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLHFCQUFxQixFQUFFLEdBQUc7WUFDMUIsK0JBQStCLEVBQUUsR0FBRztTQUNyQyxDQUFDO1FBQ0YsTUFBTSxXQUFXLEdBQXVCO1lBQ3RDLFlBQVksRUFBRSxrQ0FBa0M7WUFDaEQsUUFBUSxFQUFFLGtDQUFrQztZQUM1QyxNQUFNLEVBQUUsS0FBSztZQUNiLFlBQVksRUFBRSw4QkFBOEI7WUFDNUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ3pCLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsc0NBQXVCLEVBQUMsbUJBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMsMENBQTBDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDMUQsTUFBTSxXQUFXLEdBQTBCO1lBQ3pDLFlBQVksRUFBRSxrQ0FBa0M7WUFDaEQsWUFBWSxFQUFFLE1BQU07WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2hCLG1CQUFtQixFQUFFLENBQUM7YUFDdkI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFO29CQUNKLEVBQUUsRUFBRSxrQ0FBa0M7aUJBQ3ZDO2FBQ0Y7U0FDRixDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLHlDQUEwQixFQUFDLG1CQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdkUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLGtEQUFrRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xFLE1BQU0sV0FBVyxHQUF1QjtZQUN0QyxZQUFZLEVBQUUsa0NBQWtDO1lBQ2hELFlBQVksRUFBRSxNQUFNO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNoQixtQkFBbUIsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsYUFBYTtvQkFDMUIsV0FBVyxFQUFFLGtCQUFrQjtvQkFDL0IsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLGFBQWEsRUFBRSxLQUFLO2lCQUNyQjthQUNGO1NBQ0YsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxzQ0FBdUIsRUFBQyxtQkFBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN4RCxNQUFNLFNBQVMsR0FBOEI7WUFDM0MsU0FBUyxFQUFFLGtDQUFrQztZQUM3QyxVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1oscUJBQXFCLEVBQUUsR0FBRztZQUMxQiwrQkFBK0IsRUFBRSxHQUFHO1NBQ3JDLENBQUM7UUFDRixNQUFNLFdBQVcsR0FBeUI7WUFDeEMsWUFBWSxFQUFFLGtDQUFrQztZQUNoRCxZQUFZLEVBQUUsTUFBTTtZQUNwQixNQUFNLEVBQUUsS0FBSztZQUNiLGdCQUFnQixFQUFFO2dCQUNoQixtQkFBbUIsRUFBRSxFQUFFO2FBQ3hCO1lBQ0Qsb0JBQW9CLEVBQUUsU0FBUztZQUMvQixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUN6QixDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLHdDQUF5QixFQUFDLG1CQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLDJEQUEyRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzNFLE1BQU0sYUFBYSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3pELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSw2QkFBYyxFQUFDLG1CQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzVELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSw4QkFBZSxFQUFDLG1CQUFXLENBQUMsQ0FBQztRQUMvQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNWOztPQUVHO0lBQ0gsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFELE1BQU0sUUFBUSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3BELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxzQ0FBdUIsRUFBQyxtQkFBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLHFEQUFxRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JFLE1BQU0sYUFBYSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3pELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSx5Q0FBMEIsRUFBQyxtQkFBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyxrREFBa0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsRSxNQUFNLGFBQWEsR0FBRyxrQ0FBa0MsQ0FBQztRQUN6RCxNQUFNLFFBQVEsR0FBRyxrQ0FBa0MsQ0FBQztRQUNwRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG9DQUFxQixFQUNyQyxtQkFBVyxFQUNYLGFBQWEsRUFDYixRQUFRLEVBQ1IsTUFBTSxDQUNQLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMsa0RBQWtELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEUsTUFBTSxhQUFhLEdBQUcsa0NBQWtDLENBQUM7UUFDekQsTUFBTSxRQUFRLEdBQUcsa0NBQWtDLENBQUM7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxpQ0FBa0IsRUFDbEMsbUJBQVcsRUFDWCxhQUFhLEVBQ2IsUUFBUSxFQUNSLE1BQU0sQ0FDUCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3BELE1BQU0sYUFBYSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3pELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxpQ0FBa0IsRUFBQyxtQkFBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9