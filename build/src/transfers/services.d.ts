import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IFutureTransferQuery, IReceivingPolicy, ITransferQuery } from './interfaces';
/**
 * Listar transferências por marketplace
 */
export declare const getTransfers: (marketplace: IMarketplace, query?: ITransferQuery | undefined) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Recuperar detalhes de transferência
 */
export declare const getTransfer: (marketplace: IMarketplace, transferId: string) => Promise<import("axios").AxiosResponse<IResponse<unknown>, unknown>>;
/**
 * Cancelar transferência agendada anteriormente à data prevista para efetivação
 */
export declare const cancelTransfer: (marketplace: IMarketplace, transferId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar detalhes de recebível
 */
export declare const getTransfersBySeller: (marketplace: IMarketplace, sellerId: string) => Promise<import("axios").AxiosResponse<IResponse<unknown>, unknown>>;
/**
 * Listar transações associadas a transferência
 */
export declare const getTransferOnTransactions: (marketplace: IMarketplace, transferId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar lançamentos futuros por seller
 */
export declare const getFutureTransfers: (marketplace: IMarketplace, sellerId: string, query?: IFutureTransferQuery | undefined) => Promise<import("axios").AxiosResponse<IResponse<unknown>, unknown>>;
/**
 * Recuperar política de recebimento por seller
 */
export declare const getReceivingPolicy: (marketplace: IMarketplace, sellerId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Recuperar política de recebimento por seller
 */
export declare const updateReceivingPolicy: (marketplace: IMarketplace, sellerId: string, body: IReceivingPolicy) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
