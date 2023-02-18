import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { NombreCouchage } from '../interfaces/nombre-couchage';
import { TypeCouchage } from '../interfaces/type-couchage';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouchageService {
  envir = environment;
  endpoint = this.envir.baseUrl;
  constructor(
    private http: HttpClient, 
  
  ) { }

  getNombreCouchages(): Observable<any>{
    return this.http.get<NombreCouchage>(this.endpoint + "/nombre_couchages")
  }

  getTypeCouchages(): Observable<any>{
    return this.http.get<TypeCouchage>(this.endpoint + "/type_couchages")
  }
}
