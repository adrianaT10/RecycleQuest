import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

import { AdminService } from './admin.service';
import { RecyclingCenter, Material, CollectionType } from '../recycling-center/recycling-center';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  mapsService;
  center = new google.maps.LatLng(44.4299281,26.024193)

  centersToAdd = [];
  collectionType = ["HOME", "ATCENTER", "BOTH", "PARTNER"];

  //for Tab 1
  centerName: string;
  chosenMaterial: string;
  materials = ["Hartie", "Lemn", "Sticla", "Ulei", "Electronice", "Metal", "Plastic"];
  searchUserName: string;

  //for Tab 2
  newCenter: RecyclingCenter = new RecyclingCenter(undefined, undefined, undefined, undefined, undefined, undefined);
  separatorKeysCodes = [ENTER, COMMA];
  newCenterMaterials = this.materials.slice();

  //for Tab 3



  ngOnInit() {
    var mapProp = {
      center: this.center,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.mapsService = new google.maps.places.PlacesService(this.map);
  }

////// Tab 1 ///////

	submitCenterQuery() {
		console.log(this.centerName + " " + this.chosenMaterial);
		//make http request
		this.centerName = "";
		this.chosenMaterial = undefined;
	}

	submitUserQuery() {
		console.log(this.searchUserName);
		//http req
		this.searchUserName = "";
	}
	

////// Tab 2 ///////

	addNewCenter() {
		console.log(this.newCenter);
		console.log(this.newCenterMaterials);
		this.newCenter = new RecyclingCenter(undefined, undefined, undefined, undefined, undefined, undefined);
		this.newCenterMaterials = this.materials.slice();
		//make http req
	}

	addNewCenterMaterial(event: MatChipInputEvent): void {
	    let input = event.input;
	    let value = event.value;

	    // Add our fruit
	    if ((value || '').trim()) {
	      this.newCenterMaterials.push(value.trim());
	    }

	    // Reset the input value
	    if (input) {
	      input.value = '';
	    }
	  }

	removeNewCenterMaterial(fruit: any): void {
		let index = this.newCenterMaterials.indexOf(fruit);

		if (index >= 0) {
		  this.newCenterMaterials.splice(index, 1);
		}
	}

////// Tab 3 //////

	runCentersService() {
		let request = {
	    location: this.center,
	    radius: '500',
	    query: 'centru reciclare'
	  };
	this.centersToAdd = [];
	this.mapsService.textSearch(request, this.logResponse.bind(this));
	}

	logResponse(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
	    console.log(results);
	    
	    let centerNames = results.map(x => x.name);
	    this.adminService.checkCentersExist(centerNames).subscribe(inexistentCenters => this.getCentersInfo(inexistentCenters, results));

	  }
	}

	getCentersInfo(centerNames, allCenters) {
		console.log(centerNames);
		let centerIds = allCenters.filter(center => centerNames.indexOf(center.name) != -1).map(center => center.place_id);

		centerIds.forEach(centerId => {
			this.mapsService.getDetails({placeId: centerId}, (placeInfo, status) => {
				if (status == google.maps.places.PlacesServiceStatus.OK) {
					placeInfo.categories = this.materials.slice();
					this.centersToAdd.push(placeInfo);
					console.log(placeInfo);
				}
			});
		});
	}

	addNewCenterMaterial2(event: MatChipInputEvent, center): void {
	    let input = event.input;
	    let value = event.value;

	    // Add our fruit
	    if ((value || '').trim()) {
	    	center.categories.push(value.trim());
	    }

	    // Reset the input value
	    if (input) {
	      input.value = '';
	    }
	  }

	removeNewCenterMaterial2(fruit: any, center): void {
		let index = center.categories.indexOf(fruit);

		if (index >= 0) {
		  center.categories.splice(index, 1);
		}
	}

	addCenter(center, collectionType) {
		// this.adminService.addCenter(center).subscribe(res => {
		// 	if (res == true) {

		// 	}
		// });
		console.log(center);
		console.log(collectionType);
		var index = this.centersToAdd.indexOf(center);
		this.centersToAdd.splice(index, 1);
	}

}
