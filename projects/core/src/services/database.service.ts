import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface Lesson {
  name: string;
  description: string;
}

export enum ListType {
  users = 'users',
  lessons = 'lessons',
}

@Injectable()
export abstract class DataBaseService<T> {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  public getData<T>(listType: ListType): Observable<T> {
    return this.http.get<T>(
      `${environment.firebaseConfig.databaseURL}/${listType}.json`
    );
  }

  public saveData<T>(listType: ListType, newData: T): Observable<T> {
    console.log(newData, listType);
    return this.http.post<T>(
      `${environment.firebaseConfig.databaseURL}/${listType}.json`,
      newData
    );
  }
}
