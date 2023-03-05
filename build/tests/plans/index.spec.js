"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-return-void */
const buyers_1 = require("../../src/buyers");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Vendedores', () => {
    test('Criar novo vendedor do tipo indivíduo', async () => {
        try {
            const res = await (0, buyers_1.createBuyer)(index_1.marketplace, index_1.buyer);
            const data = res.data;
            expect(data.id).not.toBeNull();
        }
        catch (error) {
            console.log(error);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3BsYW5zL2luZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBOEM7QUFDOUMsNkNBQStDO0FBQy9DLG9DQUE4QztBQUU5Qzs7R0FFRztBQUNILFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN2RCxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG9CQUFXLEVBQUMsbUJBQVcsRUFBRSxhQUFLLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9