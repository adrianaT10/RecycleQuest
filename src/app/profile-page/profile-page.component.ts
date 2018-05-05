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

  levelUtil = new Levels();
  levelLabel;
  levelMax;

  lastPageClicked: profilePage = profilePage.PROFILE;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
    private userUtilsService: UserUtilsService) { }

  ngOnInit() {
    this.userUtilsService.getProfileInfo().subscribe((data) => {
      this.userInfo = data;
      this.username = this.userInfo.username;
      [this.levelLabel, this.levelMax] = this.levelUtil.getLevel(data.achievementPoints);
    })
  }

  showHistory() {
    this.lastPageClicked = profilePage.HISTORY;
    this.getTransactionHistory();
  }

  getTransactionHistory() {
    this.userUtilsService.getUserTransactions().subscribe((data) => {
      this.transactionsHistory = new MatTableDataSource(data);
      this.transactionsHistory.sort = this.sort;
    });
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

  showProfile() {
    this.lastPageClicked = profilePage.PROFILE;
  }

  getLevelProgress() {
    return this.userInfo.achievementPoints * 100 / this.levelMax;
  }

}

enum profilePage {
  'PROFILE', 'HISTORY', 'SETTINGS'
}
