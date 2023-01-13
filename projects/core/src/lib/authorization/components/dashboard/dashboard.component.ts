import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {MockDBService} from "../../services/mockDB/mock-db.service";
import {User} from '../../models/user'
import {Roles} from "../../models/roles";
@Component({
  selector: 'jsmu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{
  public user: User = this.dataService.getUser(JSON.parse(localStorage.getItem('user')!).uid);
  constructor(public authService: AuthService,
              public dataService: MockDBService) {
  }


}
