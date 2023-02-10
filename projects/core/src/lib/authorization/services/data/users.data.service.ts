import { Injectable } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { DataBaseService, ListType } from "../../../../services/database.service";
import { User } from "../../models/user";
import { UserCheck } from "../../models/user-check";

@Injectable()
export class UsersDataService extends DataBaseService<User> {
	private destroy$: Subject<void> = new Subject<void>();

	public getUser(): Observable<User[]> {
		return this.getData<User[]>(ListType.USERS);
	}

	public saveUser(newData: User): Observable<User> {
		return this.saveData<User>(ListType.USERS, newData);
	}

	public getUserById(uid: string): Observable<UserCheck> {
		return new Observable((observer) => {
			this.getUser()
				.pipe(takeUntil(this.destroy$))
				.subscribe((data) => {
					let userInfo: UserCheck = {
						user: undefined,
						isPresent: false
					};
					if (data) {
						Object.entries(data).forEach((user) => {
							if (user[1].uid === uid) {
								userInfo.isPresent = true;
								userInfo.user = user[1];
							}
						});
					}
					observer.next(userInfo);
					observer.complete();
				});
		});
	}
}
