import { Component } from '@angular/core';
import { User } from 'projects/core/src/services/database.service';
import { UsersDataService } from 'projects/core/src/services/users.data.service';

@Component({
  selector: 'jsmu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user1: User = {
    uid: '1',
    email: '2',
    displayName: 'ira',
    photoURL: 'ira.jpg',
    emailVerified: false,
  };
  user2: User = {
    uid: '2',
    email: '3',
    displayName: 'irada',
    photoURL: 'irada.jpg',
    emailVerified: true,
  };
  constructor(private udb: UsersDataService) {}
  public saveUser(user: User) {
    this.udb.saveUser(user).subscribe();
  }
  public getUser(field: string) {
    this.udb.getUser(field).subscribe();
  }
}
