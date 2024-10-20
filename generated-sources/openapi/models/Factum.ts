/* tslint:disable */
/* eslint-disable */
/**
 * Biblio API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FactumMetadatas } from './FactumMetadatas';
import {
    FactumMetadatasFromJSON,
    FactumMetadatasFromJSONTyped,
    FactumMetadatasToJSON,
    FactumMetadatasToJSONTyped,
} from './FactumMetadatas';

/**
 * 
 * @export
 * @interface Factum
 */
export interface Factum {
    /**
     * 
     * @type {FactumMetadatas}
     * @memberof Factum
     */
    metadatas?: FactumMetadatas;
    /**
     * 
     * @type {Array<string>}
     * @memberof Factum
     */
    urls?: Array<string>;
}

/**
 * Check if a given object implements the Factum interface.
 */
export function instanceOfFactum(value: object): value is Factum {
    return true;
}

export function FactumFromJSON(json: any): Factum {
    return FactumFromJSONTyped(json, false);
}

export function FactumFromJSONTyped(json: any, ignoreDiscriminator: boolean): Factum {
    if (json == null) {
        return json;
    }
    return {
        
        'metadatas': json['metadatas'] == null ? undefined : FactumMetadatasFromJSON(json['metadatas']),
        'urls': json['urls'] == null ? undefined : json['urls'],
    };
}

  export function FactumToJSON(json: any): Factum {
      return FactumToJSONTyped(json, false);
  }

  export function FactumToJSONTyped(value?: Factum | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'metadatas': FactumMetadatasToJSON(value['metadatas']),
        'urls': value['urls'],
    };
}
