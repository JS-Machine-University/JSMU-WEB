import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Roles } from '../../models/roles';
import { User } from '../../models/user';
import { MockDBService } from '../../services/mockDB/mock-db.service';

@Component({
  selector: 'jsmu-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss'],
})
export class RoleSelectComponent {
  public user: User = {
    uid: 'None',
    displayName: 'None',
    email: 'None',
    emailVerified: false,
    photoURL: 'None',
    role: undefined,
  };
  constructor(
    public authService: AuthService,
    public dataService: MockDBService
  ) {}

  public roleMentee(): void {
    this.userGenerate(Roles.MENTEE);
    this.dataService.addUser(this.user);
    //this.authService.RoutNavigate('dashboard'); toDo : Need page to add route in future
  }

  public roleExpert(): void {
    this.userGenerate(Roles.EXPERT);
    this.dataService.addUser(this.user);
    //this.authService.routNavigate('dashboard'); toDo : Need page to add route in future
  }

  public roleRM(): void {
    this.userGenerate(Roles.RM);
    this.dataService.addUser(this.user);
    //this.authService.routNavigate('dashboard'); toDo : Need page to add route in future
  }

  public userGenerate(userRole: Roles): void {
    this.user = {
      uid: JSON.parse(localStorage.getItem('user')!).uid,
      displayName: JSON.parse(localStorage.getItem('user')!).providerData[0]
        .displayName,
      email: JSON.parse(localStorage.getItem('user')!).providerData[0].email,
      emailVerified: true,
      photoURL: JSON.parse(localStorage.getItem('user')!).providerData[0]
        .photoURL,
      role: userRole,
    };
  }
}
