import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  constructor(private http: HttpClient) { }

  protected url = 'http://localhost:3000/api/mission';

  getAllMissions(): Observable<any> {
    return this
      .http.get(`${this.url}`).pipe(map(res => res));
  }

 /* getMissions(idMission): Observable<any> {
    return this
      .http.get(`${this.url}`).pipe(map(res => res));
  }*/

  getMissionById(idMission): Observable<any> {
    return this
      .http.get(`${this.url}` + '/' + idMission).pipe(map(res => res));
  }



  SaveNewMissions(obj): Observable<any> {
        return this.http.post(`${this.url}`, obj);
  }

  DeleteMission(idMission): Observable<any> {
    return this.http.delete(`${this.url}` + '/' + idMission);
  }

  updateMission(idMission , obj): Observable <any> {
    return this.http.put(`${this.url}`, obj);
  }


}
