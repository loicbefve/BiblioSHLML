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
 * @interface FactumMetadatas
 */
export interface FactumMetadatas {
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    cote?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    tome?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    auteur?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    titre?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    couverture?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    langue?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    edition?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    datation?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    contenu?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    etat?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof FactumMetadatas
     */
    emplacement?: string;
}

/**
 * Check if a given object implements the FactumMetadatas interface.
 */
export function instanceOfFactumMetadatas(value: object): value is FactumMetadatas {
    return true;
}

export function FactumMetadatasFromJSON(json: any): FactumMetadatas {
    return FactumMetadatasFromJSONTyped(json, false);
}

export function FactumMetadatasFromJSONTyped(json: any, ignoreDiscriminator: boolean): FactumMetadatas {
    if (json == null) {
        return json;
    }
    return {
        
        'cote': json['cote'] == null ? undefined : json['cote'],
        'tome': json['tome'] == null ? undefined : json['tome'],
        'type': json['type'] == null ? undefined : json['type'],
        'auteur': json['auteur'] == null ? undefined : json['auteur'],
        'titre': json['titre'] == null ? undefined : json['titre'],
        'couverture': json['couverture'] == null ? undefined : json['couverture'],
        'langue': json['langue'] == null ? undefined : json['langue'],
        'edition': json['edition'] == null ? undefined : json['edition'],
        'datation': json['datation'] == null ? undefined : json['datation'],
        'contenu': json['contenu'] == null ? undefined : json['contenu'],
        'etat': json['etat'] == null ? undefined : json['etat'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'emplacement': json['emplacement'] == null ? undefined : json['emplacement'],
    };
}

  export function FactumMetadatasToJSON(json: any): FactumMetadatas {
      return FactumMetadatasToJSONTyped(json, false);
  }

  export function FactumMetadatasToJSONTyped(value?: FactumMetadatas | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cote': value['cote'],
        'tome': value['tome'],
        'type': value['type'],
        'auteur': value['auteur'],
        'titre': value['titre'],
        'couverture': value['couverture'],
        'langue': value['langue'],
        'edition': value['edition'],
        'datation': value['datation'],
        'contenu': value['contenu'],
        'etat': value['etat'],
        'notes': value['notes'],
        'emplacement': value['emplacement'],
    };
}

