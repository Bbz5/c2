import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Typologie } from '../interfaces/typologie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypologieService {
  envir = environment
  endpoint = this.envir.baseUrl
  constructor(
    private http: HttpClient, 
  
  ) { }

  getTypologie(): Observable<any>{
    return this.http.get<Typologie>(this.endpoint+ "/typologies")
  }

  addTypologie(typologie: Typologie):Observable<any>{
    const headers = {
      'content-type': 'application/json'
    };
    const body = JSON.stringify(typologie);
    return this.http.post(this.endpoint+'/typologies', body, {headers: headers});
  }
}
