import { IDelete, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IFee } from './interfaces';
import { IFeeSubscription } from '.';
/**
 * Listar plano de vendas por marketplace
 */
export declare const getFees: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<IResponse<IFee>, unknown>>;
/**
 * Listar plano de vendas por marketplace
 */
export declare const getFee: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<IFee, unknown>>;
/**
 * Listar assinaturas de plano de venda
 */
export declare const getFeesSubscription: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<IResponse<IFeeSubscription>, unknown>>;
/**
 * Listar detalhes de assinatura de plano de venda
 */
export declare const getFeeSubscription: (marketplace: IMarketplace, subscriptionId: string) => Promise<import("axios").AxiosResponse<IFeeSubscription, unknown>>;
/**
 * Listar detalhes de plano de venda
 */
export declare const attachFeeSubscription: (marketplace: IMarketplace, customerId: string, planId: string, quantity: number) => Promise<import("axios").AxiosResponse<IFeeSubscription, unknown>>;
/**
 * Desassociar plano de venda
 */
export declare const unattachFeeSubscription: (marketplace: IMarketplace, subscriptionId: number) => Promise<import("axios").AxiosResponse<IDelete, unknown>>;
