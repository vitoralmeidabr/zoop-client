import { IDelete, IQuery, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { ISearchBuyer } from './interfaces';
import { IBuyer } from './interfaces';
/**
 * Get Buyer
 */
export declare const getBuyer: (marketplace: IMarketplace, buyerId: string) => Promise<import("axios").AxiosResponse<IBuyer, unknown>>;
/**
 * Get All Buyers
 */
export declare const getBuyers: (marketplace: IMarketplace, query?: IQuery) => Promise<import("axios").AxiosResponse<IResponse<IBuyer>, unknown>>;
/**
 * Delete Buyer
 */
export declare const deleteBuyer: (marketplace: IMarketplace, buyerId: string) => Promise<import("axios").AxiosResponse<IDelete, unknown>>;
/**
 * Search Seller Individuals | Business
 */
export declare const searchBuyer: (marketplace: IMarketplace, query?: ISearchBuyer) => Promise<import("axios").AxiosResponse<IBuyer, unknown>>;
/**
 * Create Buyer
 */
export declare const createBuyer: (marketplace: IMarketplace, body: IBuyer) => Promise<import("axios").AxiosResponse<IBuyer, unknown>>;
/**
 * Update Buyer
 */
export declare const updateBuyer: (marketplace: IMarketplace, buyer_id: string, body: IBuyer) => Promise<import("axios").AxiosResponse<IBuyer, unknown>>;
