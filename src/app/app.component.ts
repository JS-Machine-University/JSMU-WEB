import { Component } from '@angular/core';
import {
  DataBaseService,
  JSModule,
  User,
} from 'projects/core/src/services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'jsmu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user1: User = {
    uid: '2',
    email: 'ii',
    displayName: 'irada',
    photoURL: 'img.jpg',
    emailVerified: true,
  };
  module1: JSModule = {
    name: 'module1',
    description: 'blabla',
  };

  constructor(private db: DataBaseService) {}

  saveData(listType: string, data: object): void {
    this.db
      .saveData(listType, data)
      .subscribe();
  }
  getData(listType: string, field: string): void {
    this.db.getData(listType, field).subscribe();
  }
}
