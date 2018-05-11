import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Levels } from './levels';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { UserUtilsService } from '../user/user-utils.service';
import { Transaction } from '../user/transaction';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  username: string;
  transactionsHistory;
  columnsToDisplay = ['date', 'resource', 'weight', 'recyclingCenter'];
  userInfo: User;
  iotContainers;

  levelUtil = new Levels();
  levelLabel;
  levelMax;

  lastPageClicked: profilePage = profilePage.PROFILE;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
    private userUtilsService: UserUtilsService) { }

  ngOnInit() {
    this.userUtilsService.getProfileInfo().subscribe((data) => {
      this.userInfo = {username: data['username'], name: data['name'], achievementPoints: data['achievementPoints']};
      this.username = this.userInfo.username;
      [this.levelLabel, this.levelMax] = this.levelUtil.getLevel(data['achievementPoints']);
      this.iotContainers = data["sensorBins"];
      this.transactionsHistory = new MatTableDataSource(data['history']);
      this.transactionsHistory.sort = this.sort;
    });
  }

  showHistory() {
    this.lastPageClicked = profilePage.HISTORY;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.transactionsHistory.filter = filterValue;
  }

  isHistoryVisible(): boolean {
    return this.lastPageClicked == profilePage.HISTORY;
  }

  isProfileVisible(): boolean {
    return this.lastPageClicked === profilePage.PROFILE;
  }

  isIotVisible(): boolean {
    return this.lastPageClicked === profilePage.IOT_CONTAINERS;
  }

  showProfile() {
    this.lastPageClicked = profilePage.PROFILE;
  }

  showIot() {
    this.lastPageClicked = profilePage.IOT_CONTAINERS;
  }

  getLevelProgress() {
    return this.userInfo.achievementPoints * 100 / this.levelMax;
  }

}

enum profilePage {
  'PROFILE', 'HISTORY', 'IOT_CONTAINERS', 'SETTINGS'
}
