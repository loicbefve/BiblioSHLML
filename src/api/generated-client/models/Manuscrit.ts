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
import type { ManuscritMetadatas } from './ManuscritMetadatas';
import {
    ManuscritMetadatasFromJSON,
    ManuscritMetadatasFromJSONTyped,
    ManuscritMetadatasToJSON,
    ManuscritMetadatasToJSONTyped,
} from './ManuscritMetadatas';

/**
 * 
 * @export
 * @interface Manuscrit
 */
export interface Manuscrit {
    /**
     * 
     * @type {ManuscritMetadatas}
     * @memberof Manuscrit
     */
    metadatas?: ManuscritMetadatas;
}

/**
 * Check if a given object implements the Manuscrit interface.
 */
export function instanceOfManuscrit(value: object): value is Manuscrit {
    return true;
}

export function ManuscritFromJSON(json: any): Manuscrit {
    return ManuscritFromJSONTyped(json, false);
}

export function ManuscritFromJSONTyped(json: any, ignoreDiscriminator: boolean): Manuscrit {
    if (json == null) {
        return json;
    }
    return {
        
        'metadatas': json['metadatas'] == null ? undefined : ManuscritMetadatasFromJSON(json['metadatas']),
    };
}

  export function ManuscritToJSON(json: any): Manuscrit {
      return ManuscritToJSONTyped(json, false);
  }

  export function ManuscritToJSONTyped(value?: Manuscrit | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'metadatas': ManuscritMetadatasToJSON(value['metadatas']),
    };
}

