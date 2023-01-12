import {Component} from '@angular/core';
import {AuthService} from "../../../../projects/core/src/services/auth/auth.service";
import {Roles} from "../../../../projects/core/src/models/roles";
import {User} from "../../../../projects/core/src/models/user"
import {MockDBService} from "../../services/mock-db.service";

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss']
})
export class RoleSelectComponent{
    public user: User = {
    uid: 'None',
    displayName: 'None',
    email: 'None',
    emailVerified: false,
    photoURL: 'None',
    role: Roles.WhithoutRole
  };
  constructor(public authService: AuthService,
              public dataService: MockDBService) {
    ;
  }

  roleMentee(){
    this.userGenerate(Roles.Mentee);
    this.dataService.addUser(this.user);
    this.authService.RoutNavigate('dashboard');
  }

  roleExpert(){
    this.userGenerate(Roles.Expert)
    this.dataService.addUser(this.user);
    this.authService.RoutNavigate('dashboard');
  }

  roleRM(){
    this.userGenerate(Roles.RM)
    this.dataService.addUser(this.user);
    this.authService.RoutNavigate('dashboard');
  }

  userGenerate(userRole: Roles){
    this.user = {
      uid: JSON.parse(localStorage.getItem('user')!).uid,
      displayName: JSON.parse(localStorage.getItem('user')!).providerData[0].displayName,
      email: JSON.parse(localStorage.getItem('user')!).providerData[0].email,
      emailVerified: true,
      photoURL: JSON.parse(localStorage.getItem('user')!).providerData[0].photoURL,
      role: userRole
    }
  }
}
