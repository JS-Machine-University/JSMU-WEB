import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
	selector: "jsmu-sign-out",
	templateUrl: "./sign-out.component.html",
	styleUrls: ["./sign-out.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignOutComponent {
	constructor(private authService: AuthService) {}

	public logout() {
		return this.authService.signOut();
	}
}
