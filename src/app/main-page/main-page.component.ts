import { Component, OnInit } from '@angular/core';

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

  constructor(private recyclingCentersService: RecyclingCentersService,
    private userUtilsService: UserUtilsService) {}

  ngOnInit() {
  }

  selectResource(value: string) {
    this.selectedResource = value;

    this.getCentersLocations();
  }


  getCentersLocations(): void {
    this.recyclingCentersService.getLocationsByResource(this.selectedResource).subscribe(
      centers => this.centers= centers);
  
  }

  selectCenter(center) {
    this.selectedCenter = center;
  }

  finishProcess() {
    //sanity checks!!
    this.userUtilsService.addRecyclingTransaction(this.selectedResource, this.selectedCenter.name, new Date());
  }
}
