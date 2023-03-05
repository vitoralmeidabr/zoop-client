"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable functional/no-return-void */
const common_1 = require("../../src/common");
const sellers_1 = require("../../src/sellers");
const index_1 = require("../index");
/**
 * Sellers Tests API
 */
describe('Vendedores', () => {
    /**
     * Criar novo vendedor do tipo indivíduo
     */
    test('Criar novo vendedor do tipo indivíduo', async () => {
        const response = await (0, sellers_1.createIndividual)(index_1.marketplace, index_1.seller);
        const data = response.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Alterar vendedor do tipo indivíduo
     */
    test('Alterar vendedor do tipo indivíduo', async () => {
        const sellerId = '51e9822d1ab74ad0a621d211b8392022';
        const first_name = 'Carlos';
        const newSeller = Object.assign(Object.assign({}, index_1.seller), { first_name });
        const response = await (0, sellers_1.updateIndividual)(index_1.marketplace, sellerId, newSeller);
        const data = response.data;
        expect(data.first_name).toBe(first_name);
    });
    /**
     * Criar novo vendedor do tipo empresa
     */
    test('Criar novo vendedor do tipo empresa', async () => {
        const response = await (0, sellers_1.createBusiness)(index_1.marketplace, index_1.business);
        const data = response.data;
        expect(data.id).not.toBeNull();
    });
    /**
     * Alterar vendedor do tipo empresa
     */
    test('Alterar vendedor do tipo empresa', async () => {
        const sellerId = '46990bbbad354d5796b82b21fa6665cb';
        const business_name = 'Saitama';
        const newSeller = Object.assign(Object.assign({}, index_1.business), { business_name });
        const response = await (0, sellers_1.updateBusiness)(index_1.marketplace, sellerId, newSeller);
        const data = response.data;
        expect(data.business_name).toBe(business_name);
    });
    /**
     * Enviar documento de cadastro de vendedor
     */
    //TODO: Adicionar teste uploadDocument
    // test('Upload Seller Document', async () => {
    //   try {
    //     const query?: IQueryDocument = {
    //       file: 'test',
    //       category: 'test',
    //       metadata: 'test',
    //       description: 'test description',
    //     };
    //     const response = await uploadDocument(marketplace, query);
    //     // const data = response.data;
    //     expect(response).not.toBeNull();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
    /**
     * Listar documentos de um vendedor
     */
    test('Listar documentos de um vendedor', async () => {
        const query = {
            limit: 10,
            offset: 0,
            sort: common_1.SortType.ASC,
            date_range: new Date().getTime(),
        };
        const sellerId = '46990bbbad354d5796b82b21fa6665cb';
        const response = await (0, sellers_1.getDocuments)(index_1.marketplace, sellerId, query);
        const data = response.data;
        expect(data.total).toBe(0); // Verificar quando enviar documentos
    });
    /**
     * Download documentos de um vendedor por ID
     */
    test('Download documentos de um vendedor por ID', async () => {
        try {
            const documentId = '...';
            const response = await (0, sellers_1.downloadDocument)(index_1.marketplace, documentId);
            const data = response.data;
            expect(data.length).toBeGreaterThan(0);
        }
        catch (error) {
            console.log(error);
        }
    });
    /**
     * Recuperar detalhes de vendedor por ID.
     */
    test('Recuperar detalhes de vendedor por ID', async () => {
        const sellerId = '46990bbbad354d5796b82b21fa6665cb';
        const response = await (0, sellers_1.getSeller)(index_1.marketplace, sellerId);
        const data = response.data;
        expect(data).not.toBeNull();
    });
    /**
     * Deletar vendedor por ID
     */
    test('Deletar vendedor por ID', async () => {
        const sellerId = '46990bbbad354d5796b82b21fa6665cb';
        const response = await (0, sellers_1.deleteSeller)(index_1.marketplace, sellerId);
        const data = response.data;
        expect(data).not.toBeNull();
    });
    /**
     * Listar vendedores
     */
    test('Listar vendedores', async () => {
        const query = {
            limit: 10,
            offset: 0,
            sort: common_1.SortType.ASC,
        };
        const response = await (0, sellers_1.getSellers)(index_1.marketplace, query);
        const data = response.data;
        expect(data.total).toBeGreaterThan(0);
    });
    /**
     * Buscar vendedor por CPF/CNPJ
     */
    test('Buscar vendedor por CPF/CNPJ', async () => {
        const query = {
            ein: '26715503000137',
            taxpayer_id: '65141717968',
        };
        const response = await (0, sellers_1.searchSeller)(index_1.marketplace, query);
        const data = response.data;
        expect(data.id).not.toBeNull();
    });
});
/**
 * Listar MCCs (Merchant Category Codes)
 */
test('Listar MCCs (Merchant Category Codes)', async () => {
    const res = await (0, sellers_1.getMcCodes)(index_1.marketplace);
    const data = res.data;
    expect(data.total).toBeGreaterThan(0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3NlbGxlcnMvaW5kZXguc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE4QztBQUM5Qyw2Q0FBNkQ7QUFDN0QsK0NBWTJCO0FBQzNCLG9DQUF5RDtBQUV6RDs7R0FFRztBQUNILFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQzFCOztPQUVHO0lBQ0gsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3ZELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSwwQkFBZ0IsRUFBQyxtQkFBVyxFQUFFLGNBQU0sQ0FBQyxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7T0FFRztJQUNILElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNwRCxNQUFNLFFBQVEsR0FBRyxrQ0FBa0MsQ0FBQztRQUNwRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDNUIsTUFBTSxTQUFTLG1DQUFRLGNBQU0sS0FBRSxVQUFVLEdBQUUsQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsMEJBQWdCLEVBQUMsbUJBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNIOztPQUVHO0lBQ0gsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLEtBQUssSUFBSSxFQUFF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