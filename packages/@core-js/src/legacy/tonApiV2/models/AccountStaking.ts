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
import type { AccountStakingInfo } from './AccountStakingInfo';
import {
    AccountStakingInfoFromJSON,
    AccountStakingInfoFromJSONTyped,
    AccountStakingInfoToJSON,
} from './AccountStakingInfo';

/**
 * 
 * @export
 * @interface AccountStaking
 */
export interface AccountStaking {
    /**
     * 
     * @type {Array<AccountStakingInfo>}
     * @memberof AccountStaking
     */
    pools: Array<AccountStakingInfo>;
}

/**
 * Check if a given object implements the AccountStaking interface.
 */
export function instanceOfAccountStaking(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pools" in value;

    return isInstance;
}

export function AccountStakingFromJSON(json: any): AccountStaking {
    return AccountStakingFromJSONTyped(json, false);
}

export function AccountStakingFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStaking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pools': ((json['pools'] as Array<any>).map(AccountStakingInfoFromJSON)),
    };
}

export function AccountStakingToJSON(value?: AccountStaking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pools': ((value.pools as Array<any>).map(AccountStakingInfoToJSON)),
    };
}

Change styles - improving security