import { AxiosResponse } from 'axios';
import { IConfig, IMarketplace, IOptions } from './interfaces';
export declare const BaseURL = "https://api.zoop.ws";
/**
 * Marketplace Class
 */
export declare class Marketplace implements IMarketplace {
    readonly config: IConfig;
    /**
     * Attributes
     */
    private static __instance;
    private readonly url;
    private readonly requestConfig;
    /**
     * Constructor
     */
    constructor(config: IConfig);
    /**
     * Sandbox
     */
    isSandbox: boolean;
    /**
     * Post
     */
    getId: () => string;
    /**
     * Post
     */
    post<TResponse, TBody>(uri: string, body: TBody, options?: IOptions): Promise<AxiosResponse<TResponse, unknown>>;
    /**
     * Get
     */
    get<TResponse>(uri: string, options?: IOptions): Promise<AxiosResponse<TResponse, unknown>>;
    /**
     * Delete
     */
    delete<TResponse>(uri: string, options?: IOptions): Promise<AxiosResponse<TResponse, unknown>>;
    /**
     * Put
     */
    put<TResponse, TBody>(uri: string, body: TBody, options?: IOptions): Promise<AxiosResponse<TResponse, unknown>>;
    /**
     * Patch
     */
    patch<TResponse, TBody>(uri: string, body: TBody, options?: IOptions): Promise<AxiosResponse<TResponse, unknown>>;
    /**
     * Singleton Instance of Marketplace
     */
    static instance(config: IConfig): IMarketplace;
}
