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
			if (!userState?.value.checkBase && userState?.status == EntityStatus.SUCCESS) {
				this.userFacade.loadUser(userState?.value.uid!);
			}
			if (
				userState?.value.checkBase &&
				!userState.value.isUserPresentDB &&
				userState?.status == EntityStatus.SUCCESS
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
