import { IMessage } from '../common';
import { IMarketplace } from '../marketplace';
import { IBoleto } from './interfaces';
/**
 * Enviar cobrança de boleto por email
 */
export declare const sendBoletoByEmail: (marketplace: IMarketplace, boletoId: string) => Promise<import("axios").AxiosResponse<IMessage, unknown>>;
/**
 * Listar detalhes de boleto
 */
export declare const getBoleto: (marketplace: IMarketplace, boletoId: string) => Promise<import("axios").AxiosResponse<IBoleto, unknown>>;
