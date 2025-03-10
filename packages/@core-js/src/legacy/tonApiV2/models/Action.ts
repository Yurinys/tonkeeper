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
import type { ActionSimplePreview } from './ActionSimplePreview';
import {
    ActionSimplePreviewFromJSON,
    ActionSimplePreviewFromJSONTyped,
    ActionSimplePreviewToJSON,
} from './ActionSimplePreview';
import type { AuctionBidAction } from './AuctionBidAction';
import {
    AuctionBidActionFromJSON,
    AuctionBidActionFromJSONTyped,
    AuctionBidActionToJSON,
} from './AuctionBidAction';
import type { ContractDeployAction } from './ContractDeployAction';
import {
    ContractDeployActionFromJSON,
    ContractDeployActionFromJSONTyped,
    ContractDeployActionToJSON,
} from './ContractDeployAction';
import type { DepositStakeAction } from './DepositStakeAction';
import {
    DepositStakeActionFromJSON,
    DepositStakeActionFromJSONTyped,
    DepositStakeActionToJSON,
} from './DepositStakeAction';
import type { JettonSwapAction } from './JettonSwapAction';
import {
    JettonSwapActionFromJSON,
    JettonSwapActionFromJSONTyped,
    JettonSwapActionToJSON,
} from './JettonSwapAction';
import type { JettonTransferAction } from './JettonTransferAction';
import {
    JettonTransferActionFromJSON,
    JettonTransferActionFromJSONTyped,
    JettonTransferActionToJSON,
} from './JettonTransferAction';
import type { NftItemTransferAction } from './NftItemTransferAction';
import {
    NftItemTransferActionFromJSON,
    NftItemTransferActionFromJSONTyped,
    NftItemTransferActionToJSON,
} from './NftItemTransferAction';
import type { NftPurchaseAction } from './NftPurchaseAction';
import {
    NftPurchaseActionFromJSON,
    NftPurchaseActionFromJSONTyped,
    NftPurchaseActionToJSON,
} from './NftPurchaseAction';
import type { RecoverStakeAction } from './RecoverStakeAction';
import {
    RecoverStakeActionFromJSON,
    RecoverStakeActionFromJSONTyped,
    RecoverStakeActionToJSON,
} from './RecoverStakeAction';
import type { SmartContractAction } from './SmartContractAction';
import {
    SmartContractActionFromJSON,
    SmartContractActionFromJSONTyped,
    SmartContractActionToJSON,
} from './SmartContractAction';
import type { SubscriptionAction } from './SubscriptionAction';
import {
    SubscriptionActionFromJSON,
    SubscriptionActionFromJSONTyped,
    SubscriptionActionToJSON,
} from './SubscriptionAction';
import type { TonTransferAction } from './TonTransferAction';
import {
    TonTransferActionFromJSON,
    TonTransferActionFromJSONTyped,
    TonTransferActionToJSON,
} from './TonTransferAction';
import type { UnSubscriptionAction } from './UnSubscriptionAction';
import {
    UnSubscriptionActionFromJSON,
    UnSubscriptionActionFromJSONTyped,
    UnSubscriptionActionToJSON,
} from './UnSubscriptionAction';

/**
 * 
 * @export
 * @interface Action
 */
export interface Action {
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    type: ActionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    status: ActionStatusEnum;
    /**
     * 
     * @type {TonTransferAction}
     * @memberof Action
     */
    tonTransfer?: TonTransferAction;
    /**
     * 
     * @type {ContractDeployAction}
     * @memberof Action
     */
    contractDeploy?: ContractDeployAction;
    /**
     * 
     * @type {JettonTransferAction}
     * @memberof Action
     */
    jettonTransfer?: JettonTransferAction;
    /**
     * 
     * @type {NftItemTransferAction}
     * @memberof Action
     */
    nftItemTransfer?: NftItemTransferAction;
    /**
     * 
     * @type {SubscriptionAction}
     * @memberof Action
     */
    subscribe?: SubscriptionAction;
    /**
     * 
     * @type {UnSubscriptionAction}
     * @memberof Action
     */
    unSubscribe?: UnSubscriptionAction;
    /**
     * 
     * @type {AuctionBidAction}
     * @memberof Action
     */
    auctionBid?: AuctionBidAction;
    /**
     * 
     * @type {NftPurchaseAction}
     * @memberof Action
     */
    nftPurchase?: NftPurchaseAction;
    /**
     * 
     * @type {DepositStakeAction}
     * @memberof Action
     */
    depositStake?: DepositStakeAction;
    /**
     * 
     * @type {RecoverStakeAction}
     * @memberof Action
     */
    recoverStake?: RecoverStakeAction;
    /**
     * 
     * @type {JettonSwapAction}
     * @memberof Action
     */
    jettonSwap?: JettonSwapAction;
    /**
     * 
     * @type {SmartContractAction}
     * @memberof Action
     */
    smartContractExec?: SmartContractAction;
    /**
     * 
     * @type {ActionSimplePreview}
     * @memberof Action
     */
    simplePreview: ActionSimplePreview;
}


/**
 * @export
 */
export const ActionTypeEnum = {
    TonTransfer: 'TonTransfer',
    JettonTransfer: 'JettonTransfer',
    NftItemTransfer: 'NftItemTransfer',
    ContractDeploy: 'ContractDeploy',
    Subscribe: 'Subscribe',
    UnSubscribe: 'UnSubscribe',
    AuctionBid: 'AuctionBid',
    NftPurchase: 'NftPurchase',
    DepositStake: 'DepositStake',
    RecoverStake: 'RecoverStake',
    JettonSwap: 'JettonSwap',
    SmartContractExec: 'SmartContractExec',
    Unknown: 'Unknown'
} as const;
export type ActionTypeEnum = typeof ActionTypeEnum[keyof typeof ActionTypeEnum];

/**
 * @export
 */
export const ActionStatusEnum = {
    Ok: 'ok',
    Failed: 'failed'
} as const;
export type ActionStatusEnum = typeof ActionStatusEnum[keyof typeof ActionStatusEnum];


/**
 * Check if a given object implements the Action interface.
 */
export function instanceOfAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "simplePreview" in value;

    return isInstance;
}

export function ActionFromJSON(json: any): Action {
    return ActionFromJSONTyped(json, false);
}

export function ActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Action {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'status': json['status'],
        'tonTransfer': !exists(json, 'TonTransfer') ? undefined : TonTransferActionFromJSON(json['TonTransfer']),
        'contractDeploy': !exists(json, 'ContractDeploy') ? undefined : ContractDeployActionFromJSON(json['ContractDeploy']),
        'jettonTransfer': !exists(json, 'JettonTransfer') ? undefined : JettonTransferActionFromJSON(json['JettonTransfer']),
        'nftItemTransfer': !exists(json, 'NftItemTransfer') ? undefined : NftItemTransferActionFromJSON(json['NftItemTransfer']),
        'subscribe': !exists(json, 'Subscribe') ? undefined : SubscriptionActionFromJSON(json['Subscribe']),
        'unSubscribe': !exists(json, 'UnSubscribe') ? undefined : UnSubscriptionActionFromJSON(json['UnSubscribe']),
        'auctionBid': !exists(json, 'AuctionBid') ? undefined : AuctionBidActionFromJSON(json['AuctionBid']),
        'nftPurchase': !exists(json, 'NftPurchase') ? undefined : NftPurchaseActionFromJSON(json['NftPurchase']),
        'depositStake': !exists(json, 'DepositStake') ? undefined : DepositStakeActionFromJSON(json['DepositStake']),
        'recoverStake': !exists(json, 'RecoverStake') ? undefined : RecoverStakeActionFromJSON(json['RecoverStake']),
        'jettonSwap': !exists(json, 'JettonSwap') ? undefined : JettonSwapActionFromJSON(json['JettonSwap']),
        'smartContractExec': !exists(json, 'SmartContractExec') ? undefined : SmartContractActionFromJSON(json['SmartContractExec']),
        'simplePreview': ActionSimplePreviewFromJSON(json['simple_preview']),
    };
}

export function ActionToJSON(value?: Action | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'status': value.status,
        'TonTransfer': TonTransferActionToJSON(value.tonTransfer),
        'ContractDeploy': ContractDeployActionToJSON(value.contractDeploy),
        'JettonTransfer': JettonTransferActionToJSON(value.jettonTransfer),
        'NftItemTransfer': NftItemTransferActionToJSON(value.nftItemTransfer),
        'Subscribe': SubscriptionActionToJSON(value.subscribe),
        'UnSubscribe': UnSubscriptionActionToJSON(value.unSubscribe),
        'AuctionBid': AuctionBidActionToJSON(value.auctionBid),
        'NftPurchase': NftPurchaseActionToJSON(value.nftPurchase),
        'DepositStake': DepositStakeActionToJSON(value.depositStake),
        'RecoverStake': RecoverStakeActionToJSON(value.recoverStake),
        'JettonSwap': JettonSwapActionToJSON(value.jettonSwap),
        'SmartContractExec': SmartContractActionToJSON(value.smartContractExec),
        'simple_preview': ActionSimplePreviewToJSON(value.simplePreview),
    };
}

Document UI - refactoring code