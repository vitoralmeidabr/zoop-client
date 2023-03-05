import { IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IPlan } from './interfaces';
/**
 * Criar um plano
 */
export declare const createPlan: (marketplace: IMarketplace, body: IPlan) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar plano de vendas por marketplace
 */
export declare const getPlans: (marketplace: IMarketplace, query?: IQuery) => Promise<import("axios").AxiosResponse<IResponse<IPlan>, unknown>>;
/**
 * Listar detalhes de plano de venda
 */
export declare const getPlan: (marketplace: IMarketplace, planId: string) => Promise<import("axios").AxiosResponse<IPlan, unknown>>;
/**
 * Alterar plano pelo identificador
 */
export declare const updatePlan: (marketplace: IMarketplace, planId: string, body: IPlan) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Alterar plano pelo identificador
 */
export declare const deletePlan: (marketplace: IMarketplace, planId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
