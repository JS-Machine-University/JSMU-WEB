import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { Roles } from "../../models/roles";
import { RoleInfo } from "../../models/role-info";
import { Router } from "@angular/router";

@Component({
	selector: "jsmu-role-select",
	templateUrl: "./role-select.component.html",
	styleUrls: ["./role-select.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleSelectComponent {
	@Output()
	public isMenteeFormVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

	public rolesInfo: RoleInfo[] = [
		{
			type: Roles.MENTEE,
			features: [
				"Learn new features",
				"Have a talks with best Experts",
				"Verify your skills",
				"Upgrade your level"
			]
		},
		{
			type: Roles.EXPERT,
			features: [
				"Select your mentees",
				"Approve their talks",
				"Participate in their success",
				"Upgrade your mentor skills"
			]
		},
		{
			type: Roles.RM,
			features: [
				"Control all mentors",
				"Watch all mentees improvement",
				"Decide which talks are more important",
				"Grant new level to mentees",
				"Upgrade your leadership skills"
			]
		}
	];

	constructor(private router: Router) {}

	public switchRole(role: Roles): void {
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

	private roleMentee(): void {
		this.isMenteeFormVisible.emit(true);
		//toDo redirect to Mentee page.
	}

	private roleExpert(): void {
		//toDO redirect to Expert page
	}

	private roleRM(): void {
		//toDo redirect to RM page
	}
}
