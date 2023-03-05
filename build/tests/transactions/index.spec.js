"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const transactions_1 = require("../../src/transactions");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Transactions Test', () => {
    /**
     * Criar transação por pix
     * TODO: Pendente ativação
     */
    test('Criar transação por pix', async () => {
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            amount: 1000,
        };
        const res = await (0, transactions_1.createPixTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Criar transação por boleto simples
     */
    test('Criar transação por boleto simples', async () => {
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            customer: '2c856c75555c48b0ae6050cd76797fcd',
            amount: 1500,
            reference_id: 'Venda de Teste',
        };
        const res = await (0, transactions_1.createBoletoTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Criar transação por card token
     */
    test('Criar transação por card token', async () => {
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
     * Criar transação por autorizacao direta
     */
    test('Criar transação por autorizacao direta', async () => {
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
     * Criar transação por customer Id
     */
    test('Criar transação por customer', async () => {
        const transaction = {
            on_behalf_of: 'c6809a3b93ec47cb98afc80a010b3792',
            reference_id: '0142',
            amount: 124040,
            installment_plan: {
                number_installments: 1,
            },
            statement_descriptor: 'OkaPlay',
            customer: '2c856c75555c48b0ae6050cd76797fcd',
        };
        const res = await (0, transactions_1.createCustomerTransaction)(index_1.marketplace, transaction);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Listar detalhes de transação pelo identificador
     */
    test('Listar detalhes de transação pelo identificador', async () => {
        const transactionId = '614aa83ce1cb4470baa2d52ec0004e79';
        const res = await (0, transactions_1.getTransaction)(index_1.marketplace, transactionId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * LListar transações do marketplace
     */
    test('Listar transações do marketplace', async () => {
        const res = await (0, transactions_1.getTransactions)(index_1.marketplace);
        const data = res.data;
        expect(data.uri).not.toBeNull();
    }, 10000);
    /**
     * Listar transações por vendedor
     */
    test('Listar transações por vendedor', async () => {
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const res = await (0, transactions_1.getTransactionsBySeller)(index_1.marketplace, sellerId);
        const data = res.data;
        expect(data.items).not.toBeNull();
    });
    /**
     * Disponibilizar link carta de cancelamento
     * TODO: API não está funcionando
     * Error: endpoint_not_found
     */
    test('Disponibilizar link carta de cancelamento', async () => {
        const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
        const res = await (0, transactions_1.cancelledLetterTransaction)(index_1.marketplace, transactionId);
        const data = res.data;
        expect(data.url).not.toBeNull();
    });
    /**
     * Estornar transação cartão não presente
     */
    test('Estornar transação cartão não presente', async () => {
        const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const amount = 1000000;
        const res = await (0, transactions_1.chargebackTransaction)(index_1.marketplace, transactionId, sellerId, amount);
        const data = res.data;
        expect(data.refunded).not.toBeNull();
    });
    /**
     * Capturar transação cartão não presente
     */
    test('Capturar transação cartão não presente', async () => {
        const transactionId = 'e41e9d27bb5e435584d4d3b4b33fd427';
        const sellerId = 'c6809a3b93ec47cb98afc80a010b3792';
        const amount = 10000;
        const res = await (0, transactions_1.captureTransaction)(index_1.marketplace, transactionId, sellerId, amount);
        const data = res.data;
        expect(data.refunded).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3RyYW5zYWN0aW9ucy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7O0FBRTlDLHlEQUE4WTtBQUM5WSxvQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSCxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDOzs7T0FHRztJQUNILElBQUksQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN6QyxNQUFNLFdBQVcsR0FBb0I7WUFDbkMsWUFBWSxFQUFFLGtDQUFrQztZQUNoRCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsbUNBQW9CLEVBQUMsbUJBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNqRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFDSCxJQUFJLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEQsTUFBTSxXQUFXLEdBQXVCO1lBQ3RDLFlBQVksRUFBRSxrQ0FBa0M7WUFDaEQsUUFBUSxFQUFFLGtDQUFrQztZQUM1QyxNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxnQkFBZ0I7U0FDL0IsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxzQ0FBdUIsRUFBQyxtQkFBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFD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