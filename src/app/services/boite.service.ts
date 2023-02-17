import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Boite } from '../interfaces/boite';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoiteService {
  envir = environment
  endpoint = this.envir.baseUrl
  constructor(
    private http: HttpClient, 
  
  ) { }

  getBoites(): Observable<any>{
    return this.http.get<Boite>(this.endpoint+ "/boites")
// return this.http.get(this.endpoint+ "/boites").pipe(
//   map(x => JSON.stringify(x)),
// )
}

}
