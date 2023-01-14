import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable()
export class DataBaseService {
  user1: User = {
    uid: '2',
    email: 'ii',
    displayName: 'irada',
    photoURL: 'img.jpg',
    emailVerified: true,
  };

  constructor(private db: AngularFireDatabase) {}

  getData(): void {
    const ref = this.db.list('users');
    ref.valueChanges().subscribe((data) => {
      data.forEach((user) => {
        console.log((user as User).uid);
      });
    });
  }

  saveData() {
    const ref = this.db.list('users');
    ref
      .push(this.user1)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
