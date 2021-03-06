// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    ResponseEntity,
    VisitDTO,
} from '../models';

export interface DeleteVisitsRelatedToPatientUsingDELETERequest {
    patID: number;
}

export interface GetVisitUsingGETRequest {
    patID: number;
}

export interface NewVisitUsingPOSTRequest {
    newVisit: VisitDTO;
}

export interface NewVisitsUsingPOSTRequest {
    newVisits: Array<VisitDTO>;
}

/**
 * no description
 */
export class VisitsControllerApi extends BaseAPI {

    /**
     * deleteVisitsRelatedToPatient
     */
    deleteVisitsRelatedToPatientUsingDELETE = ({ patID }: DeleteVisitsRelatedToPatientUsingDELETERequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(patID, 'deleteVisitsRelatedToPatientUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            path: '/visit/{patID}'.replace('{patID}', encodeURI(patID)),
            method: 'DELETE',
            headers,
        });
    };

    /**
     * getVisit
     */
    getVisitUsingGET = ({ patID }: GetVisitUsingGETRequest): Observable<Array<VisitDTO>> => {
        throwIfNullOrUndefined(patID, 'getVisitUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<VisitDTO>>({
            path: '/visit/{patID}'.replace('{patID}', encodeURI(patID)),
            method: 'GET',
            headers,
        });
    };

    /**
     * newVisit
     */
    newVisitUsingPOST = ({ newVisit }: NewVisitUsingPOSTRequest): Observable<number> => {
        throwIfNullOrUndefined(newVisit, 'newVisitUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<number>({
            path: '/visit',
            method: 'POST',
            headers,
            body: newVisit,
        });
    };

    /**
     * newVisits
     */
    newVisitsUsingPOST = ({ newVisits }: NewVisitsUsingPOSTRequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(newVisits, 'newVisitsUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            path: '/visits',
            method: 'POST',
            headers,
            body: newVisits,
        });
    };

}
