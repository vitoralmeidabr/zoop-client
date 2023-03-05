import { IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IInvoice } from './interfaces';
/**
 * Criar uma fatura avulsa
 */
export declare const createInvoice: (marketplace: IMarketplace, body: IInvoice) => Promise<import("axios").AxiosResponse<IInvoice, unknown>>;
/**
 * Alterar detalhes de uma fatura pelo identificador
 */
export declare const updateInvoice: (marketplace: IMarketplace, invoiceId: string, body: IInvoice) => Promise<import("axios").AxiosResponse<IInvoice, unknown>>;
/**
 * Remover uma fatura pelo identificador
 */
export declare const deleteInvoice: (marketplace: IMarketplace, invoiceId: string) => Promise<import("axios").AxiosResponse<IInvoice, unknown>>;
/**
 * Estornar e reembolsar fatura
 */
export declare const chargebackInvoice: (marketplace: IMarketplace, invoiceId: string) => Promise<import("axios").AxiosResponse<IInvoice, unknown>>;
/**
 * Listar todas as faturas de um marketplace
 */
export declare const getInvoices: (marketplace: IMarketplace, query?: IQuery | undefined) => Promise<import("axios").AxiosResponse<IResponse<IInvoice>, unknown>>;
/**
 * Listar os detalhes de uma fatura pelo identificador
 */
export declare const getInvoice: (marketplace: IMarketplace, invoiceId: string) => Promise<import("axios").AxiosResponse<IInvoice, unknown>>;
/**
 * Listar faturas associadas a um vendedor pelo identificador
 */
export declare const getInvoiceBySeller: (marketplace: IMarketplace, sellerId: string, query?: IQuery | undefined) => Promise<import("axios").AxiosResponse<IInvoice, unknown>>;
