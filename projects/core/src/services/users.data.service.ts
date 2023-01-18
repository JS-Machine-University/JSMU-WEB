import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataBaseService, ListType, User } from './database.service';

@Injectable()
export class UsersDataService extends DataBaseService<User> {
  public getUser<User>(field: string): Observable<User> {
    return this.getData<User>(ListType.users);
  }
  public saveUser<User>(newData: User): Observable<User> {
    return this.saveData<User>(ListType.users, newData);
  }
}
