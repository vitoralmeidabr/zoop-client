import { IMarketplace } from '../marketplace';
import { IWebHooks } from './interfaces';
/**
 * Criar webhook por marketplace
 */
export declare const createWebHooks: (marketplace: IMarketplace, body: IWebHooks) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar webhooks por marketplace
 */
export declare const getWebHooks: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Recuperar detalhes de webhook
 */
export declare const getWebHook: (marketplace: IMarketplace, webhookId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Remover webhook
 */
export declare const deleteWebHooks: (marketplace: IMarketplace, webhookId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
