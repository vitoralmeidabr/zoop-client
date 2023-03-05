import { IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { ISubscription } from './interfaces';
/**
 * Criar uma assinatura entre um comprador e um plano
 */
export declare const createSubscription: (marketplace: IMarketplace, body: ISubscription) => Promise<import("axios").AxiosResponse<ISubscription, unknown>>;
/**
 * Alterar os detalhes de uma assinatura pelo identificador
 */
export declare const updateSubscription: (marketplace: IMarketplace, subscriptionId: string, body: ISubscription) => Promise<import("axios").AxiosResponse<ISubscription, unknown>>;
/**
 * Listar os detalhes de uma assinatura pelo identificador
 */
export declare const getSubscriptions: (marketplace: IMarketplace, query?: IQuery) => Promise<import("axios").AxiosResponse<IResponse<ISubscription>, unknown>>;
/**
 * Listar detalhes de plano de venda
 */
export declare const getSubscription: (marketplace: IMarketplace, subscriptionId: string) => Promise<import("axios").AxiosResponse<ISubscription, unknown>>;
/**
 * Listar assinatura de plano de venda por seller
 */
export declare const getSubscriptionsBySeller: (marketplace: IMarketplace, sellerId: string) => Promise<import("axios").AxiosResponse<ISubscription, unknown>>;
/**
 * Remover uma assinatura pelo identificador
 */
export declare const deleteSubscription: (marketplace: IMarketplace, subscriptionId: string) => Promise<import("axios").AxiosResponse<ISubscription, unknown>>;
/**
 * Suspender uma assinatura pelo identificador
 */
export declare const suspendSubscription: (marketplace: IMarketplace, subscriptionId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Reativa uma assinatura pelo identificador
 */
export declare const reactivateSubscription: (marketplace: IMarketplace, subscriptionId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
