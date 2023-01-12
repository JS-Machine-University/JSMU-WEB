import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../projects/core/src/services/auth/auth.service';
import {MockDBService} from "../../services/mock-db.service";
import {User} from '../../../../projects/core/src/models/user'
import {Roles} from "../../../../projects/core/src/models/roles";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent{
  public user: User = this.dataService.getUser(JSON.parse(localStorage.getItem('user')!).uid);
  constructor(public authService: AuthService,
              public dataService: MockDBService) {
  }


}
