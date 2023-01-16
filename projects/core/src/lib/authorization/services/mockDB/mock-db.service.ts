import { Injectable } from "@angular/core";
import { User } from "../../models/user";
import { Roles } from "../../models/roles";

@Injectable({
	providedIn: "root"
})
export class MockDBService {
	public userData: User[] = [
		{
			uid: "123",
			email: "qqqq",
			emailVerified: true,
			displayName: "aaaa",
			photoURL: "qweqwe"
		},
		{
			uid: "1234",
			email: "qqqq",
			emailVerified: true,
			displayName: "aaaa",
			photoURL: "qweqwe"
		},
		{
			uid: "12345",
			email: "qqqq",
			emailVerified: true,
			displayName: "aaaa",
			photoURL: "qweqwe"
		}
	];

	constructor() {}

	public isUserPresent(uid: String | undefined): boolean {
		return this.userData.some((user) => user.uid === uid);
	}

	public addUser(user: User): void {
		if (!this.isUserPresent(user.uid)) {
			this.userData.push(user);
		}
	}

	public getUser(uid: String): User {
		const tempData = this.userData.filter((user) => user.uid === uid);
		let tempUser: User = {
			uid: "None",
			displayName: "None",
			email: "None",
			emailVerified: false,
			photoURL: "None",
			role: undefined
		};

		if (tempData.length > 0) {
			tempUser.uid = tempData[0].uid;
			tempUser.displayName = tempData[0].displayName;
			tempUser.email = tempData[0].email;
			tempUser.emailVerified = tempData[0].emailVerified;
			tempUser.photoURL = tempData[0].photoURL;
			tempUser.role = tempData[0].role;
		}

		return tempUser;
	}
}
