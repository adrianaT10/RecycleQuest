import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	name: string;
  username: string;
	password: string;

  constructor(
  	private authenticationService: AuthenticationService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  trySignup() : void {
    this.authenticationService.registerNewUser(this.username, this.password, this.name)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['app']);
        }
      });
  }

}
