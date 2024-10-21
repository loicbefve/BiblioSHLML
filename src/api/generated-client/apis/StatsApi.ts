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


import * as runtime from '../runtime';
import type {
  Stats,
} from '../models/index';
import {
    StatsFromJSON,
    StatsToJSON,
} from '../models/index';

/**
 * 
 */
export class StatsApi extends runtime.BaseAPI {

    /**
     * Stats on the factums
     */
    async statsFactumsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Stats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stats/factums`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatsFromJSON(jsonValue));
    }

    /**
     * Stats on the factums
     */
    async statsFactumsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Stats> {
        const response = await this.statsFactumsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Stats on the fonds documentaire
     */
    async statsFondsDocumentaireGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Stats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stats/fonds_documentaire`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatsFromJSON(jsonValue));
    }

    /**
     * Stats on the fonds documentaire
     */
    async statsFondsDocumentaireGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Stats> {
        const response = await this.statsFondsDocumentaireGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Stats on the fonds johannique
     */
    async statsFondsJohanniqueGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Stats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stats/fonds_johannique`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatsFromJSON(jsonValue));
    }

    /**
     * Stats on the fonds johannique
     */
    async statsFondsJohanniqueGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Stats> {
        const response = await this.statsFondsJohanniqueGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Stats on the imprimes
     */
    async statsImprimesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Stats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stats/imprimes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatsFromJSON(jsonValue));
    }

    /**
     * Stats on the imprimes
     */
    async statsImprimesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Stats> {
        const response = await this.statsImprimesGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Stats on the index pays lorrain
     */
    async statsIndexPaysLorrainGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Stats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stats/index_pays_lorrain`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatsFromJSON(jsonValue));
    }

    /**
     * Stats on the index pays lorrain
     */
    async statsIndexPaysLorrainGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Stats> {
        const response = await this.statsIndexPaysLorrainGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Stats on the manuscrits
     */
    async statsManuscritsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Stats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stats/manuscrits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatsFromJSON(jsonValue));
    }

    /**
     * Stats on the manuscrits
     */
    async statsManuscritsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Stats> {
        const response = await this.statsManuscritsGetRaw(initOverrides);
        return await response.value();
    }

}
