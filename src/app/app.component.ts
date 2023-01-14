import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Component({
  selector: 'jsmu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user1: User = {
    uid: '2',
    email: 'ii',
    displayName: 'irada',
    photoURL: 'img.jpg',
    emailVerified: true,
  };
  constructor(private db: AngularFireDatabase) {}
  ngOnInit(): void {

  }
  getData(): void {
    const ref = this.db.list('users');
    ref.valueChanges().subscribe((data) => {
      data.forEach((user) => {
        console.log((user as User).uid)
      })
    });
  }

  userParse(user: User): string {
    return JSON.stringify(user)
  }

  saveData() {
    const ref = this.db.list('users');
    ref
      .push(JSON.parse(this.userParse(this.user1)))
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
