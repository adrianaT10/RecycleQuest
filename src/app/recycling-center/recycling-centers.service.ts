import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ServerBase } from '../server-base';
import { RecyclingCenter } from './recycling-center';

@Injectable()
export class RecyclingCentersService extends ServerBase {

  apiKey = 'AIzaSyCe0MGtImrF8Wwr4ICcqWqEZ1pCakPUCu4';

  constructor(private http: HttpClient) {
  	super();
  }

  getLocationsByResource(resource: string) {
  	const options = {
      params: new HttpParams().set('material', resource)
    };

    return this.http.get(`${this.baseUrl}/centers/findAllByMaterial`, options);
  }


  getDistances(currentLat, currentLong, centers) {
	let reduceCallback = (acc, center)   => { return acc + '|' + center.lat + ',' + center.lon};

  	let destinations = centers.reduce(reduceCallback, '');
  	console.log("destinations " + destinations);
  	console.log(centers);

  	destinations = destinations.slice(1);

  	const options = {
      params: new HttpParams().set('origins', currentLat + ',' + currentLong)
      			.set('destinations', destinations)
      			.set('key', this.apiKey)
    };
  	return this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json', options); 	
  }

  orderByDistances(centers, response) {
  	console.log(response);
  	let centerDistances = response["rows"][0]["elements"];
	centers.forEach((center, index) => {
		center.distance = centerDistances[index]["distance"]["value"];
	});

	console.log(centers);
	centers.sort((a, b) => a.distance - b.distance);
	console.log(centers);

	return centers;
  }


}
