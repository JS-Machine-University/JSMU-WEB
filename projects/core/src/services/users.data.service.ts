import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../lib/authorization/models/user";
import { DataBaseService, ListType } from "./database.service";

@Injectable()
export class UsersDataService extends DataBaseService<User> {
	public getUser<User>(): Observable<User> {
		return this.getData<User>(ListType.USERS);
	}
	public saveUser<User>(newData: User): Observable<User> {
		return this.saveData<User>(ListType.USERS, newData);
	}
}
