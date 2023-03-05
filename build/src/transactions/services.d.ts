import { IMetadata, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IBoletoTransaction, ICancelledLetter, ICardTokenTransaction, ICustomerTransaction, IDirectTransaction, IPixTransaction, IQueryTransaction, IResponseTransaction } from './interfaces';
/**
 * Criar transação por consumidor id
 */
export declare const createCustomerTransaction: (marketplace: IMarketplace, body: ICustomerTransaction) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Criar transação por token de cartão
 */
export declare const createCardTokenTransaction: (marketplace: IMarketplace, body: ICardTokenTransaction) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Criar transação por boleto
 */
export declare const createBoletoTransaction: (marketplace: IMarketplace, body: IBoletoTransaction) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Criar transação por autorização direta
 */
export declare const createDirectTransaction: (marketplace: IMarketplace, body: IDirectTransaction) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Criar transação por pix
 */
export declare const createPixTransaction: (marketplace: IMarketplace, body: IPixTransaction) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Listar transações do marketplace
 */
export declare const getTransactions: (marketplace: IMarketplace, query?: IQueryTransaction | undefined) => Promise<import("axios").AxiosResponse<IResponse<IResponseTransaction>, unknown>>;
/**
 * Listar transações por vendedor
 */
export declare const getTransactionsBySeller: (marketplace: IMarketplace, selleId: string, query?: IQueryTransaction | undefined) => Promise<import("axios").AxiosResponse<IResponse<IResponseTransaction>, unknown>>;
/**
 * Listar detalhes de transação pelo identificador
 */
export declare const getTransaction: (marketplace: IMarketplace, transactionId: string) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Alterar detalhes de transação pelo identificador
 */
export declare const updateTransaction: (marketplace: IMarketplace, transactionId: string, description?: string | undefined, metadata?: IMetadata | undefined) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Estornar transação cartão não presente
 */
export declare const chargebackTransaction: (marketplace: IMarketplace, transactionId: string, sellerId: string, amount: number, rules?: IMetadata | undefined) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Disponibilizar link carta de cancelamento
 */
export declare const cancelledLetterTransaction: (marketplace: IMarketplace, transactionId: string) => Promise<import("axios").AxiosResponse<ICancelledLetter, unknown>>;
/**
 * Capturar transação cartão não presente
 */
export declare const captureTransaction: (marketplace: IMarketplace, transactionId: string, sellerId: string, amount: number) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
/**
 * Aprovar transação (somente sandbox)
 */
export declare const approveTransaction: (marketplace: IMarketplace, transactionId: string) => Promise<import("axios").AxiosResponse<IResponseTransaction, unknown>>;
