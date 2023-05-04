import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { Router } from "@angular/router";
import { Routes } from "../../models/routes";

@Component({
	selector: "jsmu-sign-out",
	templateUrl: "./sign-out.component.html",
	styleUrls: ["./sign-out.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignOutComponent {
	constructor(
		private authService: AuthService,
		private userFacade: UserStoreFacade,
		private router: Router
	) {}

	public logout(): Promise<void> {
		this.userFacade.signOut();
		this.router.navigate([Routes.AUTH]);
		return this.authService.signOut();
	}
}
