import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Marque } from '../interfaces/marque'; 

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  envir = environment;
  endpoint = this.envir.baseUrl;

  constructor(
    private http: HttpClient, 
  
  ) { }

  getMarqueCampingcar():Observable<any>{
    return this.http.get<Marque>(this.endpoint+ "/marques")
  }

  addMarqueVehicule(marque: Marque): Observable<any>{
    const headers= {
      'content-type': 'application/json'
    };
    const body = JSON.stringify(marque);
  return this.http.post(this.endpoint+'/marques', body, {headers: headers});
  }
}
