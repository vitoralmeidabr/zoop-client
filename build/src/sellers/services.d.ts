import { IDelete, IQuery, IResponse, ISearch } from '../common';
import { IMarketplace, IMcc } from '../marketplace';
import { IBusiness, IDocument, ISeller } from './interfaces';
/**
 * Get Seller Individuals | Business
 */
export declare const getSeller: (marketplace: IMarketplace, sellerId: string) => Promise<import("axios").AxiosResponse<ISeller | IBusiness, unknown>>;
/**
 * Search Seller Individuals | Business
 */
export declare const searchSeller: (marketplace: IMarketplace, query?: ISearch) => Promise<import("axios").AxiosResponse<ISeller | IBusiness, unknown>>;
/**
 * Get Seller Individuals | Business
 */
export declare const getSellers: (marketplace: IMarketplace, query?: IQuery) => Promise<import("axios").AxiosResponse<IResponse<ISeller | IBusiness>, unknown>>;
/**
 * Delete Seller Individuals | Business
 */
export declare const deleteSeller: (marketplace: IMarketplace, sellerId: string) => Promise<import("axios").AxiosResponse<IDelete, unknown>>;
/**
 * Get Seller Individuals | Business
 */
export declare const getDocuments: (marketplace: IMarketplace, sellerId: string, query?: IQuery) => Promise<import("axios").AxiosResponse<IResponse<IDocument>, unknown>>;
/**
 * Download Seller Document
 */
export declare const downloadDocument: (marketplace: IMarketplace, documentId: string) => Promise<import("axios").AxiosResponse<readonly string[], unknown>>;
/**
 * Upload Seller Document
 */
/**
 * Create Seller Individual
 */
export declare const createIndividual: (marketplace: IMarketplace, body: ISeller) => Promise<import("axios").AxiosResponse<ISeller, unknown>>;
/**
 * Update Seller Individual
 */
export declare const updateIndividual: (marketplace: IMarketplace, seller_id: string, body: ISeller) => Promise<import("axios").AxiosResponse<ISeller, unknown>>;
/**
 * Create Seller Business
 */
export declare const createBusiness: (marketplace: IMarketplace, body: IBusiness) => Promise<import("axios").AxiosResponse<IBusiness, unknown>>;
/**
 * Update Seller Business
 */
export declare const updateBusiness: (marketplace: IMarketplace, seller_id: string, body: IBusiness) => Promise<import("axios").AxiosResponse<IBusiness, unknown>>;
/**
 * Get McCodes
 */
export declare const getMcCodes: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<IResponse<IMcc>, unknown>>;
