import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { Subject, takeUntil } from "rxjs";
import { Routes } from "../../models/routes";

@Component({
	selector: "jsmu-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy {
	public isLogged: boolean = false;
	public user: User = {
		name: undefined,
		email: undefined,
		isVerified: false,
		photoURL: undefined,
		role: undefined,
		uid: undefined
	};
	private destroy$: Subject<boolean> = new Subject<boolean>();
	constructor(public authService: AuthService, public router: Router) {}
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
	public navigateUser(login: boolean, user: User): void {
		if (login) {
			if (!true) {
				//toDo DB service user check
				// toDo: Integrate DB Service
			} else {
				this.router.navigate([Routes.ROLE_SELECT]);
			}
		}
	}
	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}
