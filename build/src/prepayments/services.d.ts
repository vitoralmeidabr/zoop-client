import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IPrePayment } from './interfaces';
import { IFuturePrePayment, IPrePaymentQuery } from '.';
/**
 * Criação de novo pedido de antecipação
 */
export declare const createPrePayment: (marketplace: IMarketplace, body: IPrePayment) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listagem de antecipações do Marketplace
 */
export declare const getPrePayments: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<readonly IPrePayment[], unknown>>;
/**
 * Listagem de antecipações do Seller
 */
export declare const getPrePaymentsBySeller: (marketplace: IMarketplace, sellerId: string, query?: IPrePaymentQuery) => Promise<import("axios").AxiosResponse<readonly IPrePayment[] | IResponse<IPrePayment>, unknown>>;
/**
 * Recupera informações da agenda futura do Seller
 */
export declare const getFuturePrePaymentsBySeller: (marketplace: IMarketplace, sellerId: string, query?: IPrePayment) => Promise<import("axios").AxiosResponse<IFuturePrePayment, unknown>>;
/**
 * Detalhe de antecipação
 */
export declare const getPrePayment: (marketplace: IMarketplace, prePaymentId: string) => Promise<import("axios").AxiosResponse<IPrePayment, unknown>>;
/**
 * Atualização de status da antecipação
 */
export declare const commitPrePayment: (marketplace: IMarketplace, prePaymentId: string) => Promise<import("axios").AxiosResponse<IPrePayment, unknown>>;
/**
 * Verificando Recebíveis Aptos a Antecipação
 */
export declare const receivablesPrePayment: (marketplace: IMarketplace, customerId: string, prepayable_for: string) => Promise<import("axios").AxiosResponse<IPrePayment, unknown>>;
