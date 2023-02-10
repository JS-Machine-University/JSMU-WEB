import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { Subject, takeUntil } from "rxjs";
import { Routes } from "../../models/routes";
import { Roles } from "../../models/roles";
import { UsersDataService } from "../../services/data/users.data.service";

@Component({
	selector: "jsmu-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy {
	public isLogged!: boolean;

	public user!: User;

	private destroy$: Subject<void> = new Subject<void>();

	constructor(
		private authService: AuthService,
		private router: Router,
		private userServise: UsersDataService
	) {}

	public login(): void {
		this.authService.gitHubAuth();
		this.authService.isLoggedIn.pipe(takeUntil(this.destroy$)).subscribe((state) => {
			this.isLogged = state;
		});
		this.authService
			.getUser()
			.pipe(takeUntil(this.destroy$))
			.subscribe((sUser) => {
				this.user = sUser;
				complete: this.navigateUser(this.isLogged, this.user);
			});
	}

	private navigateUser(login: boolean, user: User): void {
		if (login) {
			this.userCheck(user.uid!);
		}
	}

	private userCheck(uid: String): void {
		this.userServise
			.getUser()
			.pipe(takeUntil(this.destroy$))
			.subscribe((data) => {
				let isUser = false;
				let userData!: User;
				if (data) {
					for (let user of Object.entries(data)) {
						if (user[1].uid === uid) {
							isUser = true;
							userData = user[1];
						}
					}
				}
				if (isUser) {
					if (userData.role === Roles.MENTEE) {
						//toDo Redirect to Mentee page
					} else if (userData.role === Roles.EXPERT) {
						//toDO Redirect to Expert page
					} else if (userData.role === Roles.RM) {
						//toDO Redirect to RM page
					}
				} else {
					this.router.navigate([Routes.ROLE_SELECT]);
				}
			});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
