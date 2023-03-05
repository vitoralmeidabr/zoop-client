import { IMarketplace } from '../marketplace';
import { ITerminal } from '.';
/**
 * Parear terminal POS
 */
export declare const pairingTerminal: (marketplace: IMarketplace, token: string, isStaging: boolean) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Buscar informações sobre terminal
 */
export declare const getTerminal: (marketplace: IMarketplace, terminalId: string) => Promise<import("axios").AxiosResponse<ITerminal, unknown>>;
