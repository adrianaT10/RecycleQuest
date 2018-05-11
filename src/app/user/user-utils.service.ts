import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ServerBase } from '../server-base';
import { UserService } from './user.service';
import { Transaction } from './transaction';
import { User } from './user';

@Injectable()
export class UserUtilsService extends ServerBase {

  constructor(private userService: UserService, private http: HttpClient) { 
    super();
  }

  mockTransactions = [
                { 'weight': "10", 'recyclingCenter': 'Sigurec', 'date': new Date('05-05-2018'), 'resource': 'hartie'},
                { 'weight': "50", 'recyclingCenter': 'Ro Metale', 'date': new Date('05-05-2018'), 'resource': 'metal'}];

  addRecyclingTransaction(resource: string, center: string, date:Date, quantity: string) {
  	if (this.userService.isAnonymousUser()) {
  		return;
  	}
  	//send to server
  	var username = this.userService.getUsername();
  	console.log("Register transaction from " + username + " with " + resource + ", " + center);

    const options = {
      params: new HttpParams().set('username', username).set('resource', resource)
                        .set('center', center).set('date', date.toDateString()).set('weight', quantity)
    };

    return this.http.get(`${this.baseUrl}/transaction`, options);
  }


  // return user + transactions
  getProfileInfo(): Observable<Object> {
    if (this.userService.isAnonymousUser()) {
      let anonymousMock = {'username': "Stranger", 'name': 'Anonymous', 'achievementPoints': 53, 'sensorBins': [{'material': 'Hartie', 'fullness': 30}, {'material': 'Sticla', 'fullness': 80}]};
      return of(anonymousMock);
    }


    let username = this.userService.getUsername();

    const options = {
      params: new HttpParams().set('username', username)
    };

    return this.http.get(`${this.baseUrl}/profile`, options);
  }

}
