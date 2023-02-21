import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Vehicule } from '../interfaces/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  envir = environment;
  endpoint = this.envir.baseUrl;

  constructor(
    private http: HttpClient, 
  
  ) { }

  addVehicule(vehicule: Vehicule): Observable<any>{
    const headers= {
      'content-type': 'application/ld+json'
    };
    const body= JSON.stringify(vehicule)
    return this.http.post(this.endpoint+ '/vehicules', body, {
       headers: headers })
  }
}
