import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface JSModule {
  name: string;
  description: string;
}

@Injectable()
export class DataBaseService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  public getData(listType: string, field: string): Observable<any> {
    return this.http
      .get<User | JSModule>(
        `${environment.firebaseConfig.databaseURL}/${listType}.json`
      )
      .pipe(
        map((data) => {
          return Object.values(data)[0][field];
        })
      );
  }

  public saveData(listType: string, newData: any): Observable<any> {
    return this.http
      .post<User | JSModule>(
        `${environment.firebaseConfig.databaseURL}/${listType}.json`,
        newData
      )
      .pipe(
        catchError((err) => {
          return err;
        })
      );
  }
}
