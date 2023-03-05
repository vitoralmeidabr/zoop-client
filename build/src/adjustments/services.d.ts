import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IAjustment } from './interfaces';
/**
 * Criar ajuste de cobrança informando pagador e recebedor
 */
export declare const createAjustment: (marketplace: IMarketplace, owner: string, receiver: string, body: IAjustment) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Criar ajuste de cobrança informando somente pagador
 */
export declare const createAjustmentOwner: (marketplace: IMarketplace, owner: string, body: IAjustment) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Criar ajuste de cobrança informando somente pagador
 */
export declare const getAjustments: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<IResponse<unknown>, unknown>>;
/**
 * Recuperar detalhes de ajuste de cobrança
 */
export declare const getAjustment: (marketplace: IMarketplace, ajustmentId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Cancelar ajuste de cobrança agendado anteriormente à data prevista para efetivação
 */
export declare const cancelAjustment: (marketplace: IMarketplace, ajustmentId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
