import { Component, DoCheck } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { MockDBService } from "../../services/mockDB/mock-db.service";
import { interval } from "rxjs";

@Component({
	selector: "jsmu-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements DoCheck {
	constructor(public authService: AuthService, public dataService: MockDBService) {}

	public loginUser(): void {
		this.authService.gitHubAuth();
	}

	public ngDoCheck(): void {
		if (this.authService.isLoggedIn) {
			if (this.dataService.isUserPresent(this.authService.userData.uid)) {
				//this.authService.routNavigate('dashboard'); toDo: Need page to relocate in future
			} else {
				this.authService.routNavigate("role-select");
			}
		}
	}

	public logoutUser(): void {
		this.authService.signOut();
	}
}
