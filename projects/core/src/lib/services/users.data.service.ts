import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../authorization/models/user";
import { ListType } from "../models/list-type";
import { DataBaseService } from "./database.service";

@Injectable()
export class UsersDataService extends DataBaseService<User> {
	public getUser<User>(): Observable<User> {
		return this.getData<User>(ListType.USERS);
	}
	public saveUser<User>(newData: User): Observable<User> {
		return this.saveData<User>(ListType.USERS, newData);
	}
}
