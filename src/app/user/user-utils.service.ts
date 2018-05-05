import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UserService } from './user.service';
import { Transaction } from './transaction';
import { User } from './user';

@Injectable()
export class UserUtilsService {

  constructor(private userService: UserService) { }

  addRecyclingTransaction(resource: string, center: string, date:Date) {
  	if (this.userService.isAnonymousUser()) {
  		return;
  	}
  	//send to server
  	var name = this.userService.getUsername();
  	console.log("Register transaction from " + name + " with " + resource + ", " + center);
  }

  getUserTransactions(): Observable<Transaction[]> {
  	if (this.userService.isAnonymousUser()) {
  		return of([]);
  	}

    let mock: Transaction[] = [{'id': 1, 'details': '', 'weight': 33, 'recyclingCenter': 'c1', 'date': new Date(), 'resource': 'hartie'},
                {'id': 1, 'details': '', 'weight': 2, 'recyclingCenter': 'c2', 'date': new Date(), 'resource': 'lemn'},
                {'id': 1, 'details': '', 'weight': 50, 'recyclingCenter': 'c1', 'date': new Date(), 'resource': 'sticla'}]

    return of(mock);
  }

  getProfileInfo(): Observable<User> {
    if (this.userService.isAnonymousUser()) {
      let anonymousMock: User = {'username': "Stranger", 'name': 'Anonymous', 'achievementPoints': 53};
      return of(anonymousMock);
    }

    let userMock: User = {'username': "Adry", 'name': 'Adriana Tufa', 'achievementPoints': 53};

    return of(userMock)
  }

}
