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

import { exists, mapValues } from '../runtime';
import type { BlockRaw } from './BlockRaw';
import {
    BlockRawFromJSON,
    BlockRawFromJSONTyped,
    BlockRawToJSON,
} from './BlockRaw';

/**
 * 
 * @export
 * @interface GetBlockHeaderLiteServer200Response
 */
export interface GetBlockHeaderLiteServer200Response {
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetBlockHeaderLiteServer200Response
     */
    id: BlockRaw;
    /**
     * 
     * @type {number}
     * @memberof GetBlockHeaderLiteServer200Response
     */
    mode: number;
    /**
     * 
     * @type {string}
     * @memberof GetBlockHeaderLiteServer200Response
     */
    headerProof: string;
}

/**
 * Check if a given object implements the GetBlockHeaderLiteServer200Response interface.
 */
export function instanceOfGetBlockHeaderLiteServer200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mode" in value;
    isInstance = isInstance && "headerProof" in value;

    return isInstance;
}

export function GetBlockHeaderLiteServer200ResponseFromJSON(json: any): GetBlockHeaderLiteServer200Response {
    return GetBlockHeaderLiteServer200ResponseFromJSONTyped(json, false);
}

export function GetBlockHeaderLiteServer200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBlockHeaderLiteServer200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': BlockRawFromJSON(json['id']),
        'mode': json['mode'],
        'headerProof': json['header_proof'],
    };
}

export function GetBlockHeaderLiteServer200ResponseToJSON(value?: GetBlockHeaderLiteServer200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': BlockRawToJSON(value.id),
        'mode': value.mode,
        'header_proof': value.headerProof,
    };
}

Improve UI - fixing a bugDocument configuration - improving performance