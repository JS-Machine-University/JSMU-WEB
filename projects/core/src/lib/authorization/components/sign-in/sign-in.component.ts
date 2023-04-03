import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { User } from "../../models/user";
import { EntityStatus } from "../../../Store/users/models/EntityStatus";

@Component({
	selector: "jsmu-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy {
	public user!: Observable<User | null>;

	private destroy$: Subject<void> = new Subject<void>();

	constructor(
		private authService: AuthService,
		private router: Router,
		private userFacade: UserStoreFacade
	) {}

	public login(): void {
		this.authService.gitHubAuth();
		this.userFacade.getUser().subscribe((userState) => {
			if (
				!userState?.user.value.checkBase &&
				userState?.user.status == EntityStatus.SUCCESS
			) {
				this.userFacade.loadUser(userState?.user.value.uid!);
			}
			if (
				userState?.user.value.checkBase &&
				!userState.user.value.isUserPresentDB &&
				userState?.user.status == EntityStatus.SUCCESS
			) {
				this.router.navigate(["role-select"]);
			}
		});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
