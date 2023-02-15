import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { User } from "../authorization/models/user";
import { ListType } from "../models/list-type";
import { DataBaseService } from "./database.service";

@Injectable()
export class UsersDataService {
	constructor(private db: DataBaseService<User>) {}

	public getUser(): Observable<User[]> {
		return this.db.getData<User[]>(ListType.USERS);
	}

	public saveUser(newData: User): Observable<User> {
		return this.db.saveData<User>(ListType.USERS, newData);
	}

	public getUserById(uid: string): Observable<User | null> {
		const USER_DATA: number = 1;
		return this.getUser().pipe(
			map((data) => {
				let userData: User | null = null;
				if (data) {
					Object.entries(data).forEach((user) => {
						if ((user[USER_DATA] as User).uid === uid) {
							userData = user[USER_DATA] as User;
						}
					});
				}
				return userData;
			})
		);
	}
}
