import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { RecyclingCenter } from './recycling-center';

@Injectable()
export class RecyclingCentersService {

  constructor() { }

  getLocationsByResource(resource): Observable<RecyclingCenter[]> {
  	var mock_centers = [
  		new RecyclingCenter("C1", "021", "str dargerge", "http://mock", 44.431146, 26.103060),
  		new RecyclingCenter("C2", "021", "str dargerge", "http://mock", 44.431755, 26.10322),
  		new RecyclingCenter("C3", "021", "str dargerge", "http://mock", 44.432, 26.103060),
  	]
  	return of(mock_centers);
  }

}
