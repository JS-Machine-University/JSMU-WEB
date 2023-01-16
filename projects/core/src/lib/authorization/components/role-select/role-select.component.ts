import { Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Roles } from "../../models/roles";
import { User } from "../../models/user";
import { MockDBService } from "../../services/mockDB/mock-db.service";

@Component({
	selector: "jsmu-role-select",
	templateUrl: "./role-select.component.html",
	styleUrls: ["./role-select.component.scss"]
})
export class RoleSelectComponent {
	constructor(public authService: AuthService, public dataService: MockDBService) {}

	public roleMentee(): void {
		this.getUser(Roles.MENTEE);
		//this.dataService.addUser();
		//this.authService.RoutNavigate('dashboard'); toDo : Need page to add route in future
	}

	public roleExpert(): void {
		this.getUser(Roles.EXPERT);
		//this.dataService.addUser();
		//this.authService.routNavigate('dashboard'); toDo : Need page to add route in future
	}

	public roleRM(): void {
		this.getUser(Roles.RM);
		//this.dataService.addUser();
		//this.authService.routNavigate('dashboard'); toDo : Need page to add route in future
	}

	public getUser(userRole: Roles): User {
		return {
			uid: JSON.parse(localStorage.getItem("user")!).uid,
			displayName: JSON.parse(localStorage.getItem("user")!).providerData[0].displayName,
			email: JSON.parse(localStorage.getItem("user")!).providerData[0].email,
			emailVerified: true,
			photoURL: JSON.parse(localStorage.getItem("user")!).providerData[0].photoURL,
			role: userRole
		};
	}
}
