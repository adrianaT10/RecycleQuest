import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AdminService {

  constructor() { }

  // Return a list of inexistent center names
  checkCentersExist(centers) {
  	return of(centers.slice(0, 4));
  	// return of(centers.filter(x => x.startsWith("C")));
  }

  addCenter(center, type) {
  	console.log("Add Center " + center.website + " " + type);
  	return of(true);
  }

}
