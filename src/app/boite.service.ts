import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Boite } from './interfaces/boite';
import { pluck } from 'rxjs-compat/operator/pluck';


@Injectable({
  providedIn: 'root'
})
export class BoiteService {
endpoint = 'http://localhost:8000/api';
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
