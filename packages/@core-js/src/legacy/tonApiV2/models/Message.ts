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
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { StateInit } from './StateInit';
import {
    StateInitFromJSON,
    StateInitFromJSONTyped,
    StateInitToJSON,
} from './StateInit';

/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    createdLt: number;
    /**
     * 
     * @type {boolean}
     * @memberof Message
     */
    ihrDisabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Message
     */
    bounce: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Message
     */
    bounced: boolean;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    value: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    fwdFee: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    ihrFee: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof Message
     */
    destination?: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof Message
     */
    source?: AccountAddress;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    importFee: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    createdAt: number;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    opCode?: string;
    /**
     * 
     * @type {StateInit}
     * @memberof Message
     */
    init?: StateInit;
    /**
     * hex-encoded BoC with raw message body
     * @type {string}
     * @memberof Message
     */
    rawBody?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    decodedOpName?: string;
    /**
     * 
     * @type {any}
     * @memberof Message
     */
    decodedBody?: any | null;
}

/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdLt" in value;
    isInstance = isInstance && "ihrDisabled" in value;
    isInstance = isInstance && "bounce" in value;
    isInstance = isInstance && "bounced" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "fwdFee" in value;
    isInstance = isInstance && "ihrFee" in value;
    isInstance = isInstance && "importFee" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdLt': json['created_lt'],
        'ihrDisabled': json['ihr_disabled'],
        'bounce': json['bounce'],
        'bounced': json['bounced'],
        'value': json['value'],
        'fwdFee': json['fwd_fee'],
        'ihrFee': json['ihr_fee'],
        'destination': !exists(json, 'destination') ? undefined : AccountAddressFromJSON(json['destination']),
        'source': !exists(json, 'source') ? undefined : AccountAddressFromJSON(json['source']),
        'importFee': json['import_fee'],
        'createdAt': json['created_at'],
        'opCode': !exists(json, 'op_code') ? undefined : json['op_code'],
        'init': !exists(json, 'init') ? undefined : StateInitFromJSON(json['init']),
        'rawBody': !exists(json, 'raw_body') ? undefined : json['raw_body'],
        'decodedOpName': !exists(json, 'decoded_op_name') ? undefined : json['decoded_op_name'],
        'decodedBody': !exists(json, 'decoded_body') ? undefined : json['decoded_body'],
    };
}

export function MessageToJSON(value?: Message | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_lt': value.createdLt,
        'ihr_disabled': value.ihrDisabled,
        'bounce': value.bounce,
        'bounced': value.bounced,
        'value': value.value,
        'fwd_fee': value.fwdFee,
        'ihr_fee': value.ihrFee,
        'destination': AccountAddressToJSON(value.destination),
        'source': AccountAddressToJSON(value.source),
        'import_fee': value.importFee,
        'created_at': value.createdAt,
        'op_code': value.opCode,
        'init': StateInitToJSON(value.init),
        'raw_body': value.rawBody,
        'decoded_op_name': value.decodedOpName,
        'decoded_body': value.decodedBody,
    };
}

Remove tests - enhancing logs