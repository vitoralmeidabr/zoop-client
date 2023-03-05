"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-return-void */
const buyers_1 = require("../../src/buyers");
const common_1 = require("../../src/common");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Buyer Test', () => {
    /**
     * Criar comprador
     */
    test('Criar comprador', async () => {
        const res = await (0, buyers_1.createBuyer)(index_1.marketplace, index_1.buyer);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Listar compradores
     */
    test('Listar compradores', async () => {
        const query = {
            limit: 10,
            offset: 0,
            sort: common_1.SortType.ASC,
        };
        const res = await (0, buyers_1.getBuyers)(index_1.marketplace, query);
        const data = res.data;
        expect(data.total).toBeGreaterThan(0);
    });
    /**
     * Alterar comprador
     */
    test('Alterar comprador', async () => {
        const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
        const first_name = 'Mariana';
        const newBuyer = Object.assign(Object.assign({}, index_1.buyer), { first_name, phone_number: '+5584996597026', email: 'peegle.io@gmail.com', twitter: 'http://twitter' });
        const res = await (0, buyers_1.updateBuyer)(index_1.marketplace, buyerId, newBuyer);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Recuperar detalhes de comprador por ID
     */
    test('Recuperar detalhes de comprador por ID', async () => {
        const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
        const res = await (0, buyers_1.getBuyer)(index_1.marketplace, buyerId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Remover comprador por ID
     */
    test('Remover comprador por ID', async () => {
        const buyerId = '2c856c75555c48b0ae6050cd76797fcd';
        const res = await (0, buyers_1.deleteBuyer)(index_1.marketplace, buyerId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Buscar comprador por CPF/CNPJ
     */
    test('Buscar comprador por CPF/CNPJ', async () => {
        const query = { taxpayer_id: '22342178492' };
        const res = await (0, buyers_1.searchBuyer)(index_1.marketplace, query);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL2J1eWVycy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQThDO0FBQzlDLDZDQVMwQjtBQUMxQiw2Q0FBb0Q7QUFDcEQsb0NBQThDO0FBRTlDOztHQUVHO0FBQ0gsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDMUI7O09BRUc7SUFDSCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakMsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG9CQUFXLEVBQUMsbUJBQVcsRUFBRSxhQUFLLENBQUMsQ0FBQztRQUNsRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBRUg7O09BRUc7SUFDSCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEMsTUFBTSxLQUFLLEdBQVc7WUFDcEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxpQkFBUSxDQUFDLEdBQUc7U0FDbkIsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxrQkFBUyxFQUFDLG1CQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ25DLE1BQU0sT0FBTyxHQUFHLGtDQUFrQyxDQUFDO1FBQ25ELE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM3QixNQUFNLFFBQVEsbUNBQ1QsYUFBSyxLQUNSLFVBQVUsRUFDVixZQUFZLEVBQUUsZ0JBQWdCLEVBQzlCLEtBQUssRUFBRSxxQkFBcUIsRUFDNUIsT0FBTyxFQUFFLGdCQUFnQixHQUMxQixDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG9CQUFXLEVBQUMsbUJBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hELE1BQU0sT0FBTyxHQUFHLGtDQUFrQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxpQkFBUSxFQUFDLG1CQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFDLE1BQU0sT0FBTyxHQUFHLGtDQUFrQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxvQkFBVyxFQUFDLG1CQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQy9DLE1BQU0sS0FBSyxHQUFpQixFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsQ0FBQztRQUMzRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsb0JBQVcsRUFBQyxtQkFBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9