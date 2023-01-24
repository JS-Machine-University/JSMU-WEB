import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Roles } from "../../models/roles";
import { User } from "../../models/user";
import { RoleInfo } from "../../models/role-info";

@Component({
	selector: "jsmu-role-select",
	templateUrl: "./role-select.component.html",
	styleUrls: ["./role-select.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleSelectComponent {
	public rolesInfo: RoleInfo[] = [
		{
			name: Roles.MENTEE,
			features: [
				"Learn new features",
				"Have a talks with best Experts",
				"Verify your skills",
				"Upgrade your level"
			]
		},
		{
			name: Roles.EXPERT,
			features: [
				"Select your mentees",
				"Approve their talks",
				"Participate in their success",
				"Upgrade your mentor skills"
			]
		},
		{
			name: Roles.RM,
			features: [
				"Control all mentors",
				"Watch all mentees improvement",
				"Decide which talks are more important",
				"Grant new level to mentees",
				"Upgrade your leadership skills"
			]
		}
	];
	constructor(public authService: AuthService) {}
	public switchRole(role: Roles) {
		switch (role) {
			case Roles.MENTEE:
				this.roleMentee();
				break;
			case Roles.EXPERT:
				this.roleExpert();
				break;
			case Roles.RM:
				this.roleRM();
				break;
		}
	}
	public roleMentee(): void {
		this.getUser(Roles.MENTEE);
		// toDo : Need page to add route in future
	}
	public roleExpert(): void {
		this.getUser(Roles.EXPERT);
		//toDo : Need page to add route in future
	}
	public roleRM(): void {
		this.getUser(Roles.RM);
		// toDo : Need page to add route in future
	}
	public getUser(userRole: Roles): User {
		return {
			uid: JSON.parse(localStorage.getItem("user")!).uid,
			name: JSON.parse(localStorage.getItem("user")!).providerData[0].displayName,
			email: JSON.parse(localStorage.getItem("user")!).providerData[0].email,
			isVerified: true,
			photoURL: JSON.parse(localStorage.getItem("user")!).providerData[0].photoURL,
			role: userRole
		};
	}
}
