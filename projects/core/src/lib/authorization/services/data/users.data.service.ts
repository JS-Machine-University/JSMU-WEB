import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataBaseService, ListType } from "../../../../services/database.service";
import { User } from "../../models/user";

@Injectable()
export class UsersDataService extends DataBaseService<User> {
	public getUser(): Observable<User[]> {
		return this.getData<User[]>(ListType.USERS);
	}

	public saveUser(newData: User): Observable<User> {
		return this.saveData<User>(ListType.USERS, newData);
	}
}
