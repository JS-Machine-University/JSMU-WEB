import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { Router } from "@angular/router";
import { Observable, Subject, takeUntil } from "rxjs";
import { User } from "../../models/user";
import { Routes } from "../../models/routes";

@Component({
	selector: "jsmu-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy {
	public user!: Observable<User | null>;

	private destroy$: Subject<void> = new Subject<void>();

	constructor(private authService: AuthService, private router: Router) {}

	public login(): void {
		this.authService.gitHubAuth();
		this.authService.isLoggedIn.pipe(takeUntil(this.destroy$)).subscribe((state) => {
			if (state) {
				this.router.navigate([Routes.AUTH]);
			}
		});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
