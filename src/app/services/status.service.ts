import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  envir = environment;
  endpoint = this.envir.baseUrl;

  constructor(
    private http: HttpClient, 
  
  ) { }

  getStatus(): Observable<any>{
    return this.http.get<Status>(this.endpoint+ "/statuses")
  }
}
