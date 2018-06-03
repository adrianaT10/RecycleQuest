import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServerBase } from '../server-base';



@Injectable()
export class AdminService extends ServerBase {

  constructor(private http: HttpClient) { 
    super();
  }

  // Return a list of inexistent center names
  checkCentersExist(centers) {
    const options = {
      params: new HttpParams().set('centers', centers)
    };

    return this.http.post(`${this.baseUrl}/centers/notHere`, centers);
  }

  addCenter(center) {
  	const options = {
      params: new HttpParams().set('center', center)
    };

    return this.http.post(`${this.baseUrl}/centers/update`, center, options);
  }

  queryCenters(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.baseUrl}/centers/showAll`);
  }

  queryUsers(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.baseUrl}/users/showAll`);
  }

}
