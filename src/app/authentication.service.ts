import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { ServerBase } from './server-base';
import { User } from './user/user';
import { UserService } from './user/user.service';

@Injectable()
export class AuthenticationService extends ServerBase {

  constructor(private userService: UserService, private http: HttpClient) { 
    super();
  }

  loginUser(username: string, pass: string): Observable<boolean> {

    const options = {
      params: new HttpParams().set('username', username).set('password', pass)
    };

    return this.http.get<boolean>(`${this.baseUrl}/login`, options).pipe (res => {
        if (res) {
          this.userService.setUser({username: username});
        }
        return res;
      });
    }


  registerNewUser(username: string, pass: string, name: string): Observable<boolean> {

    const options = {
      params: new HttpParams().set('username', username).set('password', pass).set('name', name)
    };
    return this.http.get<boolean>(`${this.baseUrl}/users/signup`, options).pipe (res => {
        if (res) {
          this.userService.setUser({username: username});
        }
        return res;
    });
  }

}
