import { IMarketplace } from '../marketplace';
import { ISplitTransaction } from '../transactions';
import { ISplitGrossValue, ISplitPercentage, ISplitRecipientPercentage, ISplitRecipientValue, ISplitValue } from './interfaces';
/**
 * Criar Split por valor ou Percentagem taxas do seller (principal)
 */
export declare const createSplit: (marketplace: IMarketplace, transactionId: string, body: ISplitValue | ISplitPercentage) => Promise<import("axios").AxiosResponse<ISplitTransaction, unknown>>;
/**
 * Criar Split por valor ou porcentagem recipient assume o valor total da taxa
 */
export declare const createSplitRecepient: (marketplace: IMarketplace, transactionId: string, body: ISplitRecipientValue | ISplitRecipientPercentage) => Promise<import("axios").AxiosResponse<ISplitTransaction, unknown>>;
/**
 * Criar Split por valor recipient assume o valor total da taxa
 */
export declare const createSplitRecepientGross: (marketplace: IMarketplace, transactionId: string, body: ISplitGrossValue) => Promise<import("axios").AxiosResponse<ISplitTransaction, unknown>>;
/**
 * Recupera detalhes de Split por ID
 */
export declare const getSplitByTransaction: (marketplace: IMarketplace, transactionId: string, splitId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar detalhes de Split por transação
 */
export declare const getSplitRulesByTransaction: (marketplace: IMarketplace, transactionId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Alterar Split por transação
 */
export declare const updateSplitByTransaction: (marketplace: IMarketplace, transactionId: string, splitId: string, body: ISplitValue | ISplitRecipientValue | ISplitGrossValue | ISplitPercentage | ISplitRecipientPercentage) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Remover Split por transação
 */
export declare const deleteSplitByTransaction: (marketplace: IMarketplace, transactionId: string, splitId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
