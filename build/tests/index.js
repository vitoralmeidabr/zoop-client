"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardThree = exports.cardTwo = exports.cardOne = exports.business = exports.seller = exports.buyer = exports.bankAccount = exports.credentials = exports.user = exports.marketplace = void 0;
const bankAccount_1 = require("../src/bankAccount");
const marketplace_1 = require("../src/marketplace");
/**
 * Configuração do Marketplace
 */
const config = {
    marketplaceId: '',
    publishableKey: '',
    sandbox: true,
};
/**
 * Instancia do Marketplace
 */
exports.marketplace = marketplace_1.Marketplace.instance(config);
/**
 * Objeto Credencial
 */
exports.user = {
    username: 'saitama.io@gmail.com',
    password: 'Senha123456!',
    first_name: 'Saitama',
    last_name: 'Master',
};
exports.credentials = {
    username: 'saitama.io@gmail.com',
    password: 'Senha123456!',
};
exports.bankAccount = {
    holder_name: 'Mariana Isabella Sabrina Almeida',
    bank_code: '001',
    account_number: 2800217,
    routing_number: 1557,
    taxpayer_id: '22342178492',
    type: bankAccount_1.AccountType.CORRENTE,
};
/**
 * Objeto Comprador
 */
exports.buyer = {
    first_name: 'Mariana Isabella',
    last_name: 'Sabrina Almeida',
    email: 'mariana@tortasecreta.com',
    phone_number: '849969597026',
    taxpayer_id: '22342178492',
    birthdate: '1988-06-26',
    address: {
        line1: 'Rua Padre Germano',
        line2: '1148',
        neighborhood: 'Lagoa Nova',
        postal_code: '59075205',
        country_code: 'BR',
        city: 'Natal',
        state: 'RN',
    },
};
/**
 * Objeto Vendedor Pessoa Física
 */
exports.seller = {
    first_name: 'Mario',
    last_name: 'Franco',
    email: 'martha.melo13@live.com',
    phone_number: '2120689053',
    taxpayer_id: '65141717968',
    birthdate: '1986-07-05',
    address: {
        line1: 'Macedo Rua',
        line2: '1148',
        neighborhood: 'Bairro',
        postal_code: '31638972',
        country_code: 'BR',
        city: 'Egon de Nossa Senhora',
        state: 'SP',
    },
    mcc: '5989',
};
/**
 * Objeto Vendedor Pessoa Jurídica
 */
exports.business = {
    owner: {
        first_name: 'Saitama',
        last_name: 'Pouch',
        email: 'mail@saitama.com',
        phone_number: '2120689053',
        taxpayer_id: '65141717968',
        birthdate: '1986-07-05',
    },
    owner_address: {
        line1: 'Macedo Rua',
        line2: '1148',
        neighborhood: 'Bairro',
        postal_code: '31638972',
        country_code: 'BR',
        city: 'Egon de Nossa Senhora',
        state: 'SP',
    },
    business_name: 'Saitama Inc.',
    business_email: 'mail@saitama.com',
    business_phone: '2120689053',
    business_opening_date: '2016-12-15',
    ein: '26715503000137',
    statement_descriptor: 'Saitama',
    business_address: {
        line1: 'Macedo Rua',
        line2: '1148',
        neighborhood: 'Bairro',
        postal_code: '31638972',
        country_code: 'BR',
        city: 'Egon de Nossa Senhora',
        state: 'SP',
    },
    mcc: '5989',
};
//A transação será aceita.
exports.cardOne = {
    holder_name: 'Mario Cardoso',
    card_number: '5138692036125449',
    expiration_month: '01',
    expiration_year: '2028',
    security_code: '123',
};
//A transação será recusada com um código "card_declined".
exports.cardTwo = {
    holder_name: 'Mario Cardoso',
    card_number: '4710426743216178',
    expiration_month: '01',
    expiration_year: '2028',
    security_code: '123',
};
//A transação será recusada com um código "service_request_timeout".
exports.cardThree = {
    holder_name: 'Mario Cardoso',
    card_number: '4710426743216178',
    expiration_month: '01',
    expiration_year: '2028',
    security_code: '123',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvREFBK0Q7QUFFL0Qsb0RBQXdFO0FBS3hFOztHQUVHO0FBRUgsTUFBTSxNQUFNLEdBQVk7SUFDdEIsYUFBYSxFQUFFLEVBQUU7SUFDakIsY0FBYyxFQUFFLEVBQUU7SUFDbEIsT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBQ0Y7O0dBRUc7QUFDVSxRQUFBLFdBQVcsR0FBaUIseUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEU7O0dBRUc7QUFDVSxRQUFBLElBQUksR0FBVTtJQUN6QixRQUFRLEVBQUUsc0JBQXNCO0lBQ2hDLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFNBQVMsRUFBRSxRQUFRO0NBQ3BCLENBQUM7QUFDVyxRQUFBLFdBQVcsR0FBaUI7SUFDdkMsUUFBUSxFQUFFLHNCQUFzQjtJQUNoQyxRQUFRLEVBQUUsY0FBYztDQUN6QixDQUFDO0FBQ1csUUFBQSxXQUFXLEdBQWlCO0lBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7SUFDL0MsU0FBUyxFQUFFLEtBQUs7SUFDaEIsY0FBYyxFQUFFLE9BQU87SUFDdkIsY0FBYyxFQUFFLElBQUk7SUFDcEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsSUFBSSxFQUFFLHlCQUFXLENBQUMsUUFBUTtDQUMzQixDQUFDO0FBQ0Y7O0dBRUc7QUFDVSxRQUFBLEtBQUssR0FBVztJQUMzQixVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLFNBQVMsRUFBRSxpQkFBaUI7SUFDNUIsS0FBSyxFQUFFLDBCQUEwQjtJQUNqQyxZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtJQUMxQixTQUFTLEVBQUUsWUFBWTtJQUN2QixPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLEtBQUssRUFBRSxN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