import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
     constructor(private http: HttpClient) { }

     protected url = 'http://localhost:3000/api';

     getAllMissions(): Observable<any> {
       return this
               .http
               .get(`${this.url}/mission`)
               .pipe(
                 map(res => res)
             );
         }
}
