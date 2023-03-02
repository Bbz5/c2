import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCouchage } from '../interfaces/type-couchage';

@Injectable({
  providedIn: 'root'
})
export class TypeCouchageService {
  envir= environment
  endpoint = this.envir.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  addTypeCouchage( typeCouchage: TypeCouchage): Observable<any>{
    const headers = {
      'content-type' : 'application/json'
    };
    const body= JSON.stringify(typeCouchage);
    return this.http.post(this.endpoint+'/type_couchages', body, {headers:headers});
  }
}
