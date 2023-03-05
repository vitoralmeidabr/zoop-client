import { IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IBalance, IBalanceQuery } from './interfaces';
/**
 * Lista contas por buyer
 */
export declare const getBalanceByBuyer: (marketplace: IMarketplace, buyerId: string) => Promise<import("axios").AxiosResponse<IBalance, unknown>>;
/**
 * Lista contas por seller
 */
export declare const getBalanceBySeller: (marketplace: IMarketplace, sellerId: string) => Promise<import("axios").AxiosResponse<IBalance, unknown>>;
/**
 * Listar histórico de lançamentos pelo identificador da conta
 */
export declare const getHistoryBalance: (marketplace: IMarketplace, balanceId: string) => Promise<import("axios").AxiosResponse<IResponse<unknown>, unknown>>;
/**
 * Listar histórico de lançamentos de conta por seller
 */
export declare const getHistoryBalanceBySeller: (marketplace: IMarketplace, sellerId: string, query?: IBalanceQuery | undefined) => Promise<import("axios").AxiosResponse<IResponse<unknown>, unknown>>;
/**
 * Listar histórico de lançamentos de conta por seller
 */
export declare const getHistoryBalanceByBuyer: (marketplace: IMarketplace, buyerId: string, query?: IBalanceQuery | undefined) => Promise<import("axios").AxiosResponse<IResponse<unknown>, unknown>>;
