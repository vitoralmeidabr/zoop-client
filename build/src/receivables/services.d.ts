import { IMarketplace } from '../marketplace';
import { IReceivable, IReceivableQuery } from './interfaces';
/**
 * Listar detalhes de recebível
 */
export declare const getReceivable: (marketplace: IMarketplace, receivableId: string) => Promise<import("axios").AxiosResponse<IReceivable, unknown>>;
/**
 * Listar recebíveis por transação
 */
export declare const getReceivableByTransaction: (marketplace: IMarketplace, transactionId: string) => Promise<import("axios").AxiosResponse<IReceivable, unknown>>;
/**
 * Listar recebíveis por seller
 */
export declare const getReceivableBySeller: (marketplace: IMarketplace, sellerId: string, query?: IReceivableQuery) => Promise<import("axios").AxiosResponse<IReceivable, unknown>>;
