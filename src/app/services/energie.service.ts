import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Energie } from '../interfaces/energie';

@Injectable({
  providedIn: 'root'
})
export class EnergieService {
  envir = environment;
  endpoint = this.envir.baseUrl;

  constructor(
    private http: HttpClient, 
  
  ) { }

  getEneregies(): Observable<any>{
    return this.http.get<Energie>(this.endpoint + '/energies')
  }

  addEnergie(energie: Energie): Observable<any>{
    const headers= {
      'content-type' : 'application/json'
    };
    const body = JSON.stringify(energie)
    return this.http.post(this.endpoint+'/energies', body, {headers:headers})
  }
}
