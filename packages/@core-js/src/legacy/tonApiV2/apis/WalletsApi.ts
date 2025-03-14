/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Accounts,
  GetBlockDefaultResponse,
  Seqno,
} from '../models/index';
import {
    AccountsFromJSON,
    AccountsToJSON,
    GetBlockDefaultResponseFromJSON,
    GetBlockDefaultResponseToJSON,
    SeqnoFromJSON,
    SeqnoToJSON,
} from '../models/index';

export interface GetAccountSeqnoRequest {
    accountId: string;
}

export interface GetWalletsByPublicKeyRequest {
    publicKey: string;
}

/**
 * WalletsApi - interface
 * 
 * @export
 * @interface WalletsApiInterface
 */
export interface WalletsApiInterface {
    /**
     * Get account seqno
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletsApiInterface
     */
    getAccountSeqnoRaw(requestParameters: GetAccountSeqnoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Seqno>>;

    /**
     * Get account seqno
     */
    getAccountSeqno(requestParameters: GetAccountSeqnoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Seqno>;

    /**
     * Get wallets by public key
     * @param {string} publicKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletsApiInterface
     */
    getWalletsByPublicKeyRaw(requestParameters: GetWalletsByPublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Accounts>>;

    /**
     * Get wallets by public key
     */
    getWalletsByPublicKey(requestParameters: GetWalletsByPublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Accounts>;

}

/**
 * 
 */
export class WalletsApi extends runtime.BaseAPI implements WalletsApiInterface {

    /**
     * Get account seqno
     */
    async getAccountSeqnoRaw(requestParameters: GetAccountSeqnoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Seqno>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getAccountSeqno.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/wallet/{account_id}/seqno`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SeqnoFromJSON(jsonValue));
    }

    /**
     * Get account seqno
     */
    async getAccountSeqno(requestParameters: GetAccountSeqnoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Seqno> {
        const response = await this.getAccountSeqnoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get wallets by public key
     */
    async getWalletsByPublicKeyRaw(requestParameters: GetWalletsByPublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Accounts>> {
        if (requestParameters.publicKey === null || requestParameters.publicKey === undefined) {
            throw new runtime.RequiredError('publicKey','Required parameter requestParameters.publicKey was null or undefined when calling getWalletsByPublicKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/pubkeys/{public_key}/wallets`.replace(`{${"public_key"}}`, encodeURIComponent(String(requestParameters.publicKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountsFromJSON(jsonValue));
    }

    /**
     * Get wallets by public key
     */
    async getWalletsByPublicKey(requestParameters: GetWalletsByPublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Accounts> {
        const response = await this.getWalletsByPublicKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
Remove API - improving security