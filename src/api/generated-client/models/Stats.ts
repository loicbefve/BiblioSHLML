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
/**
 * 
 * @export
 * @interface Stats
 */
export interface Stats {
    /**
     * 
     * @type {number}
     * @memberof Stats
     */
    count?: number;
}

/**
 * Check if a given object implements the Stats interface.
 */
export function instanceOfStats(value: object): value is Stats {
    return true;
}

export function StatsFromJSON(json: any): Stats {
    return StatsFromJSONTyped(json, false);
}

export function StatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stats {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
    };
}

  export function StatsToJSON(json: any): Stats {
      return StatsToJSONTyped(json, false);
  }

  export function StatsToJSONTyped(value?: Stats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
    };
}

