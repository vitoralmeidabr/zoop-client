import { IQuery } from '../common';
import { IMarketplace } from '../marketplace';
/**
 * Listar eventos por marketplace
 */
export declare const getEvents: (marketplace: IMarketplace, query?: IQuery | undefined) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Redisparo de eventos
 */
export declare const replayEvents: (marketplace: IMarketplace, query?: IQuery | undefined) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Redisparo de eventos
 */
export declare const replayEvent: (marketplace: IMarketplace, eventId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
