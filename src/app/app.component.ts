import { Component } from '@angular/core';
import {
  DataBaseService,
  JSModule,
  User,
} from 'projects/core/src/services/database.service';

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

  saveData(listType: string, data: object) {
    this.db.saveData(listType, data);
  }
  getData(listType: string, field: string) {
    this.db.getData(listType, field);
  }
}
