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

    return this.http.get(`${this.baseUrl}/check-centers`, options);
  }

  addCenter(center, type) {
  	const options = {
      params: new HttpParams().set('center', center)
    };

    return this.http.post(`${this.baseUrl}/add-center`, options);
  }

}
