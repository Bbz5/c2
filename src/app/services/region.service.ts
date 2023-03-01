import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Region } from '../interfaces/region';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  envir = environment
  endpoint = this.envir.baseUrl
  constructor(
    private http: HttpClient, 
  ) { }

  getRegions(): Observable<any>{ 
    return this.http.get<Region>(this.endpoint+ "/regions")
  }

  addRegion(region : Region): Observable<any>{
    const headers = {
      'content-type': 'application/json'
    };
    const body = JSON.stringify(region);
    return this.http.post(this.endpoint+'/regions', body, {headers: headers});
  }

}
