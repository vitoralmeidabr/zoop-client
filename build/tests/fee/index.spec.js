"use strict";
/* eslint-disable functional/no-return-void */
Object.defineProperty(exports, "__esModule", { value: true });
const fee_1 = require("../../src/fee");
const index_1 = require("../index");
/**
 * Marketplace Tests API
 */
describe('Fee Test', () => {
    /**
     * Listar plano de vendas por marketplace
     */
    test('Listar plano de vendas por marketplace', async () => {
        const res = await (0, fee_1.getFees)(index_1.marketplace);
        const data = res.data;
        expect(data.total).toBeGreaterThanOrEqual(0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL2ZlZS9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7O0FBRTlDLHVDQUF3QztBQUN4QyxvQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSCxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUN4Qjs7T0FFRztJQUVILElBQUksQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN4RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsYUFBTyxFQUFDLG1CQUFXLENBQUMsQ0FBQztRQUN2QyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9