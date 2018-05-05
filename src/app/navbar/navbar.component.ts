import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	@Input() type: String;

  constructor() { }

  ngOnInit() {
  }

}
