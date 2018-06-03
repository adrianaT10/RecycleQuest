import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { RecyclingCenter } from '../recycling-center/recycling-center';
import { RecyclingCentersService } from '../recycling-center/recycling-centers.service';
import { UserUtilsService } from '../user/user-utils.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  lat: number = 44.431146; 
  lng: number = 26.103060;

  selectedResource: string;

  centers = null;
  selectedCenter: RecyclingCenter;
  quantity;

  constructor(private recyclingCentersService: RecyclingCentersService,
    private userUtilsService: UserUtilsService, public snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  selectResource(value: string) {
    this.selectedResource = value;

    this.getCentersLocations();
  }


  getCentersLocations(): void {
    this.recyclingCentersService.getLocationsByResource(this.selectedResource).subscribe(
      centers => {
        this.centers = centers;
        orderByDistance();
      });
  
  }

  selectCenter(center) {
    this.selectedCenter = center;
  }

  finishProcess() {
    //sanity checks!!
    this.userUtilsService.addRecyclingTransaction(this.selectedResource, this.selectedCenter.name, new Date(), this.quantity)
      .subscribe((res) => console.log(res));
    // this.selectedCenter = undefined;
    this.quantity = undefined;

    this.snackBar.open("Datele au fost inregistrate", "Done", {
      duration: 4000,
    });
  }

  orderByDistance() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let currentLat = position.coords.latitude;
          let currentLong = position.coords.longitude;

          this.recyclingCentersService.getDistances(currentLat, currentLong, this.centers).subscribe(res => {
            this.centers = this.recyclingCentersService.orderByDistances(this.centers, res);
          });

        });
      } else {
        console.error("Geolocation not supported by browser");
      }
  }
}
