import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { Subject, takeUntil } from "rxjs";
import { Routes } from "../../models/routes";

@Component({
	selector: "lib-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy {
	private isLogged!: boolean;

	private user!: User;

	private destroy$: Subject<void> = new Subject<void>();

	constructor(private authService: AuthService, private router: Router) {}

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
			if (!true) {
				//toDo DB service user check
				// toDo: Integrate DB Service
			} else {
				this.router.navigate([Routes.ROLE_SELECT]);
			}
		}
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
