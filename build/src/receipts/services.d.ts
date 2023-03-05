import { IMarketplace } from '../marketplace';
/**
 * Enviar recibo por E-mail
 */
export declare const sendReceiptByEmail: (marketplace: IMarketplace, receiptId: string, email: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Enviar recibo por SMS
 */
export declare const sendReceiptBySMS: (marketplace: IMarketplace, receiptId: string, phone: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Enviar recibo por SMS e E-mail
 */
export declare const sendReceipt: (marketplace: IMarketplace, receiptId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Alterar detalhes do recibo
 */
export declare const getReceipt: (marketplace: IMarketplace, receiptId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar detalhes do recibo
 */
export declare const updateReceipt: (marketplace: IMarketplace, receiptId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar detalhes do recibo
 */
export declare const renderHtmlReceipt: (marketplace: IMarketplace, receiptId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
