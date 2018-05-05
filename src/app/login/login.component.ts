import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email: string;
	password: string;

  constructor(
  	private authenticationService: AuthenticationService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  tryLogin() : void {
    this.authenticationService.loginUser(this.email, this.password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['app']);
        }
        //else arata mesaj eroares
      });
  }

  updateMail(mail: string): void {
  	this.email = mail
  }

  updatePassword(pass: string): void {
  	this.password = pass
  }

}
