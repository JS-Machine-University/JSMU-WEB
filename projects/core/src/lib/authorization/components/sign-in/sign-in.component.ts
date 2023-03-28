import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { UsersDataService } from "../../../services/users.data.service";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { User } from "../../models/user";

@Component({
	selector: "jsmu-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy {
	public isLogged!: boolean;
	public user!: Observable<User | null>;

	private destroy$: Subject<void> = new Subject<void>();

	constructor(
		private authService: AuthService,
		private router: Router,
		private userServise: UsersDataService,
		private userFacade: UserStoreFacade
	) {}

	public login(): void {
		this.authService.gitHubAuth();
		this.userFacade.getUser().subscribe((userState) => {
			if (!userState?.checkBase && userState?.isUserAuth) {
				this.userFacade.loadUser(userState?.uid!);
			}
			if (userState?.checkBase && !userState.isUserPresentDB && userState.isUserAuth) {
				this.router.navigate(["role-select"]);
			}
		});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
