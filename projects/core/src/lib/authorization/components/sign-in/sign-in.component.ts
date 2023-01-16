import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "projects/core/src/lib/authorization/services/auth/auth.service";
import { MockDBService } from "../../services/mockDB/mock-db.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { Subscription } from "rxjs";

@Component({
	selector: "jsmu-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnDestroy {
	public isLogged: boolean = false;
	public user: User = {
		displayName: undefined,
		email: undefined,
		emailVerified: false,
		photoURL: undefined,
		role: undefined,
		uid: undefined
	};

	public isLoggedSub: Subscription = new Subscription();
	public userSub: Subscription = new Subscription();
	constructor(
		public authService: AuthService,
		public dataService: MockDBService,
		public router: Router
	) {}
	public login(): void {
		this.authService.gitHubAuth();
		this.isLoggedSub = this.authService.isLoggedIn.subscribe((state) => {
			this.isLogged = state;
		});
		this.userSub = this.authService.getUser().subscribe((sUser) => {
			this.user = sUser;
			complete: this.navigateUser(this.isLogged, this.user);
		});
	}

	public navigateUser(login: boolean, user: User) {
		if (login) {
			if (this.dataService.isUserPresent(user.uid)) {
				//this.router.navigate(["dashboard"]);
			} else {
				console.log("routed");
				this.router.navigate(["role-select"]);
			}
		}
	}

	ngOnDestroy() {
		this.isLoggedSub.unsubscribe();
		this.userSub.unsubscribe();
	}
}
