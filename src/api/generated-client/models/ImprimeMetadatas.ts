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
 * @interface ImprimeMetadatas
 */
export interface ImprimeMetadatas {
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    epi?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    travee?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    tablette?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    cote?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    ordre?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    lieu?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    format?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    auteur?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    titre?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    annee?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    tome?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    etat?: string;
    /**
     * 
     * @type {string}
     * @memberof ImprimeMetadatas
     */
    commentaire?: string;
}

/**
 * Check if a given object implements the ImprimeMetadatas interface.
 */
export function instanceOfImprimeMetadatas(value: object): value is ImprimeMetadatas {
    return true;
}

export function ImprimeMetadatasFromJSON(json: any): ImprimeMetadatas {
    return ImprimeMetadatasFromJSONTyped(json, false);
}

export function ImprimeMetadatasFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImprimeMetadatas {
    if (json == null) {
        return json;
    }
    return {
        
        'epi': json['epi'] == null ? undefined : json['epi'],
        'travee': json['travee'] == null ? undefined : json['travee'],
        'tablette': json['tablette'] == null ? undefined : json['tablette'],
        'cote': json['cote'] == null ? undefined : json['cote'],
        'ordre': json['ordre'] == null ? undefined : json['ordre'],
        'lieu': json['lieu'] == null ? undefined : json['lieu'],
        'format': json['format'] == null ? undefined : json['format'],
        'auteur': json['auteur'] == null ? undefined : json['auteur'],
        'titre': json['titre'] == null ? undefined : json['titre'],
        'annee': json['annee'] == null ? undefined : json['annee'],
        'tome': json['tome'] == null ? undefined : json['tome'],
        'etat': json['etat'] == null ? undefined : json['etat'],
        'commentaire': json['commentaire'] == null ? undefined : json['commentaire'],
    };
}

  export function ImprimeMetadatasToJSON(json: any): ImprimeMetadatas {
      return ImprimeMetadatasToJSONTyped(json, false);
  }

  export function ImprimeMetadatasToJSONTyped(value?: ImprimeMetadatas | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'epi': value['epi'],
        'travee': value['travee'],
        'tablette': value['tablette'],
        'cote': value['cote'],
        'ordre': value['ordre'],
        'lieu': value['lieu'],
        'format': value['format'],
        'auteur': value['auteur'],
        'titre': value['titre'],
        'annee': value['annee'],
        'tome': value['tome'],
        'etat': value['etat'],
        'commentaire': value['commentaire'],
    };
}

