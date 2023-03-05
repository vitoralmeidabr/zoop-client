import * as Yup from 'yup';
declare module 'yup' {
    interface StringSchema {
        cnpj(number: string): StringSchema;
        cpf(number: string): StringSchema;
        password(password: string): StringSchema;
        creditCardNumber(number: string): StringSchema;
        creditCardCvv(number: string): StringSchema;
        creditCardHolderName(name: string): StringSchema;
        creditCardExpirationMonth(date: string): StringSchema;
        creditCardExpirationYear(date: string): StringSchema;
    }
}
export default Yup;
