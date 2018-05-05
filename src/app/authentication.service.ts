import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user/user';
import { UserService } from './user/user.service';

@Injectable()
export class AuthenticationService {

  constructor(private userService: UserService) { }

  loginUser(email: string, pass: string): Observable<boolean> {
  	let dummyUser: User = {username: "Adry", name: "Adriana Tufa", achievementPoints: 44};

  	return of(true).pipe(res => {
  		if (res) {
  			this.userService.setUser(dummyUser);
  		}
  		return res;
  	});
  }

  registerNewUser(email: string, pass: string): Observable<boolean> {
  	let dummyUser: User = new User("Adriana");
  	
  	return of(true).pipe(res => {
  		if (res) {
  			this.userService.setUser(dummyUser);
  		}
  		return res;
  	});
  }

}
