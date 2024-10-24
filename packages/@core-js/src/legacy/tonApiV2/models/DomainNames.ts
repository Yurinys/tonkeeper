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
/**
 * 
 * @export
 * @interface DomainNames
 */
export interface DomainNames {
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainNames
     */
    domains: Array<string>;
}

/**
 * Check if a given object implements the DomainNames interface.
 */
export function instanceOfDomainNames(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "domains" in value;

    return isInstance;
}

export function DomainNamesFromJSON(json: any): DomainNames {
    return DomainNamesFromJSONTyped(json, false);
}

export function DomainNamesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainNames {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domains': json['domains'],
    };
}

export function DomainNamesToJSON(value?: DomainNames | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domains': value.domains,
    };
}

Change README - enhancing logs