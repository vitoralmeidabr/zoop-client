"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-return-void */
const sellers_1 = require("../../src/sellers");
const users_1 = require("../../src/users");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Marketplace Test', () => {
    test('Create Seller Individuals', async () => {
        try {
            const res = await (0, sellers_1.getMcCodes)(index_1.marketplace);
            const data = res.data;
            expect(data.total).toBeGreaterThan(0);
        }
        catch (error) {
            console.log(error);
        }
    });
    test('Verificar acesso de usuário do Dashboard e Minha Conta', async () => {
        try {
            const res = await (0, users_1.signInUser)(index_1.marketplace, index_1.credentials);
            const data = res.data;
            expect(data).not.toBeNull();
        }
        catch (error) {
            console.log(error);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL21hcmtldHBsYWNlL2luZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLDJDQUE2QztBQUM3QyxvQ0FBb0Q7QUFFcEQ7O0dBRUc7QUFDSCxRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2hDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzQyxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG9CQUFVLEVBQUMsbUJBQVcsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyx3REFBd0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN4RSxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLGtCQUFVLEVBQUMsbUJBQVcsRUFBRSxtQkFBVyxDQUFDLENBQUM7WUFDdkQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9