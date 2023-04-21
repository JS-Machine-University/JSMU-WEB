import { Injectable } from "@angular/core";
import { map, Observable, of, switchMap } from "rxjs";
import { User } from "../authorization/models/user";
import { ListType } from "../models/list-type";
import { DataBaseService } from "./database.service";
import { AuthService } from "../authorization/services/auth/auth.service";

@Injectable()
export class UsersDataService {
	constructor(private db: DataBaseService<User>, private authServ: AuthService) {}

	public getUser(): Observable<User[]> {
		return this.db.getData<User[]>(ListType.USERS);
	}

	public saveUser(newData: User): Observable<User> {
		return this.db.saveData<User>(ListType.USERS, newData);
	}

	public getUserById(uid: string): Observable<User | null | undefined> {
		if (!uid) {
			return of(undefined);
		}
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

	public isUserLogin(): Observable<User | null | undefined> {
		return this.authServ.getUser().pipe(
			switchMap((sUser) => {
				return this.getUserById(sUser.uid!);
			})
		);
	}
}
