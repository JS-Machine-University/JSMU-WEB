import {Component} from '@angular/core';
import {AuthService} from 'projects/core/src/services/auth/auth.service';
import {MockDBService} from "../../services/mock-db.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent{
  constructor(public authService: AuthService,
              public dataService: MockDBService) {
  }

  loginUser(){
    this.authService.GoogleAuth();
    setTimeout(() => {
      if(this.dataService.isUserPresent(this.authService.userData.uid)){
        this.authService.RoutNavigate('dashboard');
      }
      else{
        this.authService.RoutNavigate('role-select');
      }
    }, 3000);
  }
}
