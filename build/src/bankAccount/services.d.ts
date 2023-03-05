import { IDelete, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { IBank, IBankAccount, IBankToken } from './interfaces';
/**
 * Get Bank Account by Id
 */
export declare const getBankAccount: (marketplace: IMarketplace, banckAccountId: string) => Promise<import("axios").AxiosResponse<IBank, unknown>>;
/**
 * Get Bank Account by Seller
 * Lista todas as contas, ativas e inativas
 */
export declare const getBankAccountBySeller: (marketplace: IMarketplace, sellerId: string) => Promise<import("axios").AxiosResponse<IBank, unknown>>;
/**
 * Get All Bank Accounts
 */
export declare const getBankAccounts: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<IResponse<IBank>, unknown>>;
/**
 * Create Bank Account
 */
export declare const createBankAccount: (marketplace: IMarketplace, body: IBankAccount) => Promise<import("axios").AxiosResponse<IBankToken, unknown>>;
/**
 * Delete Bank Account
 */
export declare const deleteBankAccount: (marketplace: IMarketplace, bankAccountId: string) => Promise<import("axios").AxiosResponse<IDelete, unknown>>;
/**
 * Attch Bank To Customer
 */
export declare const attachBankAccount: (marketplace: IMarketplace, banckAccountId: string, customerId: string) => Promise<import("axios").AxiosResponse<IBank, unknown>>;
