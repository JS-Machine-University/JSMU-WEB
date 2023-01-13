import { Component } from '@angular/core';
import { AuthService } from 'projects/core/src/lib/authorization/services/auth/auth.service';
import { MockDBService } from '../../services/mockDB/mock-db.service';
import { interval } from 'rxjs';

@Component({
  selector: 'jsmu-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    public authService: AuthService,
    public dataService: MockDBService
  ) {}

  public loginUser(): void {
    this.authService.gitHubAuth();

    const timer = setInterval(() => {
      if (this.authService.isLoggedIn) {
        if (this.dataService.isUserPresent(this.authService.userData.uid)) {
          clearInterval(timer);
          //this.authService.routNavigate('dashboard'); toDo: Need page to relocate in future
        } else {
          clearInterval(timer);
          this.authService.routNavigate('role-select');
        }
      }
    }, 2000);
  }

  public logoutUser(): void {
    this.authService.signOut();
  }
}
