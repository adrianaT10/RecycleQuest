import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	email: string;
	password: string;

  constructor(
  	private authenticationService: AuthenticationService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  trySignup() : void {
    this.authenticationService.registerNewUser(this.email, this.password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['app']);
        }
      });
  }

  updateMail(mail: string): void {
  	this.email = mail
  }

  updatePassword(pass: string): void {
  	this.password = pass
  }
}
