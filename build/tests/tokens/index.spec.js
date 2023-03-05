"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("../../src/tokens");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Token and Cards Test', () => {
    /**
     * Criar novo token de cartão
     */
    test('Criar novo token de cartão', async () => {
        try {
            const res = await (0, tokens_1.createCardToken)(index_1.marketplace, index_1.cardOne);
            const data = res.data;
            expect(data.id).not.toBeNull();
        }
        catch (error) {
            console.log(error);
        }
    });
    /**
     * Associar cartão com comprador
     */
    test('Associar cartão com comprador', async () => {
        try {
            const token = 'fdc1160633e649a5937d579309098efd';
            const customer = '2c856c75555c48b0ae6050cd76797fcd';
            const res = await (0, tokens_1.attchCard)(index_1.marketplace, customer, token);
            const data = res.data;
            expect(data.id).not.toBeNull();
        }
        catch (error) {
            console.log(error);
        }
    });
    /**
     * Listar detalhes de cartão pelo identificador
     */
    test('Listar detalhes de cartão pelo identificador', async () => {
        try {
            const cardId = 'aa11c52a370647e6bf42789567ab6840';
            const res = await (0, tokens_1.getCard)(index_1.marketplace, cardId);
            const data = res.data;
            expect(data.id).not.toBeNull();
        }
        catch (error) {
            console.log(error);
        }
    });
    /**
     * Remover cartão pelo identificador
     */
    test('Remover cartão pelo identificador', async () => {
        try {
            const cardId = 'aa11c52a370647e6bf42789567ab6840';
            const res = await (0, tokens_1.deleteCard)(index_1.marketplace, cardId);
            const data = res.data;
            expect(data.id).not.toBeNull();
        }
        catch (error) {
            console.log(error);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3Rva2Vucy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7O0FBRTlDLDZDQUswQjtBQUMxQixvQ0FBZ0Q7QUFFaEQ7O0dBRUc7QUFDSCxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO0lBQ3BDOztPQUVHO0lBQ0gsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzVDLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsd0JBQWUsRUFBQyxtQkFBVyxFQUFFLGVBQU8sQ0FBQyxDQUFDO1lBQ3hELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQy9DLElBQUk7WUFDRixNQUFNLEtBQUssR0FBRyxrQ0FBa0MsQ0FBQztZQUNqRCxNQUFNLFFBQVEsR0FBRyxrQ0FBa0MsQ0FBQztZQUNwRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsa0JBQVMsRUFBQyxtQkFBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSDs7T0FFRztJQUNILElBQUksQ0FBQyw4Q0FBOEMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM5RCxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsa0NBQWtDLENBQUM7WUFDbEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLGdCQUFPLEVBQUMsbUJBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNuRCxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsa0NBQWtDLENBQUM7WUFDbEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG1CQUFVLEVBQUMsbUJBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9