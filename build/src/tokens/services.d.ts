import { IDelete } from '../common';
import { IMarketplace } from '../marketplace';
import { ICard, ICardToken } from './interfaces';
/**
 * Criar novo token de cartão
 */
export declare const createCardToken: (marketplace: IMarketplace, body: ICard) => Promise<import("axios").AxiosResponse<ICardToken, unknown>>;
/**
 * Remover cartão pelo identificador
 */
export declare const getCard: (marketplace: IMarketplace, cardId: string) => Promise<import("axios").AxiosResponse<IDelete, unknown>>;
/**
 * Remover cartão pelo identificador
 */
export declare const deleteCard: (marketplace: IMarketplace, cardId: string) => Promise<import("axios").AxiosResponse<IDelete, unknown>>;
/**
 * Associar cartão com comprador
 */
export declare const attchCard: (marketplace: IMarketplace, customer: string, token: string) => Promise<import("axios").AxiosResponse<ICardToken, unknown>>;
