import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Roles } from "../../models/roles";
import { User } from "../../models/user";
import { RoleInfo } from "../../models/role-info";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";

@Component({
	selector: "jsmu-role-select",
	templateUrl: "./role-select.component.html",
	styleUrls: ["./role-select.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleSelectComponent implements OnInit, OnDestroy {
	private user!: User;
	private destroy$: Subject<void> = new Subject<void>();

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

	constructor(private router: Router, private userFacade: UserStoreFacade) {}

	ngOnInit() {
		this.userFacade
			.getUser()
			.pipe(takeUntil(this.destroy$))
			.subscribe((sUser) => {
				this.user = sUser?.user.value!;
			});
	}

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
		this.userFacade.saveUser(this.getUser(Roles.MENTEE));
		this.router.navigate(["home-page"]);
		//toDo redirect to Mentee page.
	}

	private roleExpert(): void {
		this.userFacade.saveUser(this.getUser(Roles.EXPERT));
		this.router.navigate(["home-page"]);
		//toDO redirect to Expert page
	}

	private roleRM(): void {
		this.userFacade.saveUser(this.getUser(Roles.RM));
		this.router.navigate(["home-page"]);
		//toDo redirect to RM page
	}

	private getUser(userRole: Roles): User {
		return {
			uid: this.user?.uid,
			name: this.user?.name,
			email: this.user?.email,
			photoURL: this.user?.photoURL,
			role: userRole,
			isUserAuth: true,
			isUserPresentDB: true,
			checkBase: true
		};
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
