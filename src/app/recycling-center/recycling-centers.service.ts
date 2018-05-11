import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ServerBase } from '../server-base';
import { RecyclingCenter } from './recycling-center';

@Injectable()
export class RecyclingCentersService extends ServerBase {

  constructor(private http: HttpClient) {
  	super();
  }

  getLocationsByResource(resource: string) {
  	const options = {
      params: new HttpParams().set('resource', resource)
    };

    return this.http.get(`${this.baseUrl}/centers`, options);
  }

}
