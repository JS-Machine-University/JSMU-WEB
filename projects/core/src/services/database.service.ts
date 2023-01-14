import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface JSModule {
  name: string;
  description: string
}

@Injectable()
export class DataBaseService {

  constructor(private db: AngularFireDatabase) {}

  getData(listType: string, field: string): void {
    const ref = this.db.list(`${listType}`);
    ref.valueChanges().subscribe((data) => {
      data.forEach((inst: any) => {
        console.log(inst[field]);
      });
    });
  }

  saveData(listType: string, data: any) {
    const ref = this.db.list(`${listType}`);
    ref
      .push(data)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
