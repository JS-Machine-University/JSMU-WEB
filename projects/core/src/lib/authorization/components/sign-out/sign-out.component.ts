import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";

@Component({
	selector: "jsmu-sign-out",
	templateUrl: "./sign-out.component.html",
	styleUrls: ["./sign-out.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignOutComponent {
	constructor(private authService: AuthService, private userFacade: UserStoreFacade) {}

	public logout(): Promise<void> {
		this.userFacade.signOut();
		return this.authService.signOut();
	}
}
