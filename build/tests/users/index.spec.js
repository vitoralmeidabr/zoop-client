"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../src/users");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Users Test', () => {
    /**
     * Listar usuários do Dashboard e Minha Conta
     */
    test('Listar usuários do Dashboard e Minha Conta', async () => {
        var _a;
        const res = await (0, users_1.getUsers)(index_1.marketplace);
        const data = res.data;
        expect((_a = data.items) === null || _a === void 0 ? void 0 : _a.length).toBeGreaterThanOrEqual(0);
    }, 30000);
    /**
     * Criar usuário Dashboard e Minha Conta
     */
    test('Criar usuário Dashboard e Minha Conta', async () => {
        const res = await (0, users_1.createUser)(index_1.marketplace, index_1.user);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Criar usuário Dashboard e Minha Conta com Convite
     */
    test('Criar usuário Dashboard e Minha Conta com Convite', async () => {
        const res = await (0, users_1.createUser)(index_1.marketplace, index_1.user, true);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Listar usuário do Dashboard e Minha Conta pelo identificador
     */
    test('Listar usuário do Dashboard e Minha Conta pelo identificador', async () => {
        const userId = '9ea7ca6396c24f55bfdd59dd81054904';
        const res = await (0, users_1.getUser)(index_1.marketplace, userId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Verificar acesso de usuário do Dashboard e Minha Conta
     */
    test('Verificar acesso de usuário do Dashboard e Minha Conta', async () => {
        const res = await (0, users_1.signInUser)(index_1.marketplace, index_1.credentials);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3VzZXJzL2luZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4Qzs7QUFFOUMsMkNBQTRFO0FBQzVFLG9DQUEwRDtBQUUxRDs7R0FFRztBQUNILFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQzFCOztPQUVHO0lBRUgsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssSUFBSSxFQUFFOztRQUM1RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsZ0JBQVEsRUFBQyxtQkFBVyxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsTUFBQSxJQUFJLENBQUMsS0FBSywwQ0FBRSxNQUFNLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDVjs7T0FFRztJQUVILElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN2RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsa0JBQVUsRUFBQyxtQkFBVyxFQUFFLFlBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUVILElBQUksQ0FBQyxtREFBbUQsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNuRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsa0JBQVUsRUFBQyxtQkFBVyxFQUFFLFlBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0g7O09BRUc7SUFFSCxJQUFJLENBQUMsOERBQThELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDOUUsTUFBTSxNQUFNLEdBQUcsa0NBQWtDLENBQUM7UUFDbEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLGVBQU8sRUFBQyxtQkFBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUVILElBQUksQ0FBQyx3REFBd0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN4RSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsa0JBQVUsRUFBQyxtQkFBVyxFQUFFLG1CQUFXLENBQUMsQ0FBQztRQUN2RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==