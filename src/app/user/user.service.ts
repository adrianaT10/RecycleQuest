import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

	private isLoggedIn: boolean = false;
	private user: User;


	constructor() { }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  isAnonymousUser(): boolean {
    return !this.isLoggedIn;
  }

  setUser(user): void {
    this.isLoggedIn = true;
    this.user = user;
  }

  getUsername(): string {
    if (this.user)
      return this.user.username;
  }

}
