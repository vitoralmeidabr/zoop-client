"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const boletos_1 = require("../../src/boletos");
/**
 * Marketplace Tests API
 */
describe('Boleto Test', () => {
    /**
     * Listar detalhes de boleto
     */
    test('Listar detalhes de boleto', async () => {
        const boletoId = 'bce4d1d340364deb9d97b25b7d65241b';
        const res = await (0, boletos_1.getBoleto)(__1.marketplace, boletoId);
        const data = res.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Enviar cobrança de boleto por email
     */
    test('Enviar cobrança de boleto por email', async () => {
        const boletoId = 'bce4d1d340364deb9d97b25b7d65241b';
        const res = await (0, boletos_1.sendBoletoByEmail)(__1.marketplace, boletoId);
        const data = res.data;
        expect(data).not.toBeNull();
    }, 10000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL2JvbGV0by9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7O0FBRTlDLDBCQUFpQztBQUNqQywrQ0FBaUU7QUFFakU7O0dBRUc7QUFDSCxRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUMzQjs7T0FFRztJQUNILElBQUksQ0FBQywyQkFBMkIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzQyxNQUFNLFFBQVEsR0FBRyxrQ0FBa0MsQ0FBQztRQUNwRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxlQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JELE1BQU0sUUFBUSxHQUFHLGtDQUFrQyxDQUFDO1FBQ3BELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSwyQkFBaUIsRUFBQyxlQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0QsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQyxDQUFDIn0=