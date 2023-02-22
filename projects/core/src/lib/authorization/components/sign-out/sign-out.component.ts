import { Component } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Observable } from "rxjs";

@Component({
	selector: "jsmu-sign-out",
	templateUrl: "./sign-out.component.html",
	styleUrls: ["./sign-out.component.scss"]
})
export class SignOutComponent {
	public isLogged!: Observable<any>;
	constructor(private authService: AuthService) {}

	public logout() {
		this.authService.signOut();
	}
}
