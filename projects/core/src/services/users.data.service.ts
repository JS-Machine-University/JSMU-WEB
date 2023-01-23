import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataBaseService, ListType } from "./database.service";
export interface User {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
	emailVerified: boolean;
}

@Injectable()
export class UsersDataService extends DataBaseService<User> {
	public getUser<User>(): Observable<User> {
		return this.getData<User>(ListType.USERS);
	}
	public saveUser<User>(newData: User): Observable<User> {
		return this.saveData<User>(ListType.USERS, newData);
	}
}
