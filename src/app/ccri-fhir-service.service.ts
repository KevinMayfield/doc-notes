import { Injectable } from '@angular/core';
import {TdGET, TdHttp, TdQueryParams} from '@covalent/http';
import {HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@TdHttp({
  baseUrl: 'https://data.developer.nhs.uk/ccri-fhir/STU3',
  baseHeaders: new HttpHeaders({ 'Accept': 'application/fhir+json' }),
})
@Injectable({
  providedIn: 'root'
})
export class CcriFhirServiceService {

  constructor() { }

  @TdGET({
    path: '/Patient',
  })
  getPatientSearchResponse(@TdQueryParams() queryParams?: HttpParams): Observable<HttpResponse<any>> {
    console.log(queryParams);
    return; }

  @TdGET({
    path: '/Practitioner',
  })
  getPractitionerSearchResponse(@TdQueryParams() queryParams?: HttpParams): Observable<HttpResponse<any>> {
    console.log(queryParams);
    return; }

}
