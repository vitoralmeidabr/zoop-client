import { IProfile, IResponse } from '../common';
import { IMarketplace } from '../marketplace';
import { ApplicationType, ICredentials, IPassword, IPermissions, IUser } from './interfaces';
/**
 * Criar usuário Dashboard e Minha Conta
 */
export declare const createUser: (marketplace: IMarketplace, body: IUser, invite?: boolean) => Promise<import("axios").AxiosResponse<IUser, unknown>>;
/**
 * Listar usuário do Dashboard e Minha Conta pelo identificador
 */
export declare const getUser: (marketplace: IMarketplace, userId: string) => Promise<import("axios").AxiosResponse<IUser, unknown>>;
/**
 * Listar usuários do Dashboard e Minha Conta
 */
export declare const getUsers: (marketplace: IMarketplace) => Promise<import("axios").AxiosResponse<IResponse<IUser>, unknown>>;
/**
 * Criar nova senha para usuário Dashboard e Minha Conta
 */
export declare const createNewPassword: (marketplace: IMarketplace, userId: string, body: IPassword) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Criar nova senha para usuário Dashboard e Minha Conta
 */
export declare const forgotPassword: (marketplace: IMarketplace, username: string, application?: ApplicationType) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Criar permissão para usuário do Dashboard e Minha Conta
 */
export declare const createPermissions: (marketplace: IMarketplace, userId: string, body: readonly IPermissions[]) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Listar permissão para usuário do Dashboard e Minha Conta pelo identificador
 */
export declare const getPermissions: (marketplace: IMarketplace, userId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Alterar nome e sobrenome de usuário do Dashboard e Minha Conta
 */
export declare const updateProfile: (marketplace: IMarketplace, userId: string, body: IProfile) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * Deletar permissão de usuário do Dashboard e Minha Conta
 */
export declare const deletePermissions: (marketplace: IMarketplace, userId: string) => Promise<import("axios").AxiosResponse<unknown, unknown>>;
/**
 * SignIn
 */
export declare const signInUser: (marketplace: IMarketplace, body: ICredentials) => Promise<import("axios").AxiosResponse<IUser, unknown>>;
