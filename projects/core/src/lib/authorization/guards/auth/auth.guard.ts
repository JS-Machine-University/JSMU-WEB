import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";
import { Observable } from "rxjs";
import { Routes } from "../../models/routes";
@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	constructor(public authService: AuthService, public router: Router) {}

	public canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		this.authService.isLoggedIn.subscribe((state) => {
			if (!state) {
				this.router.navigate(["home-page"]);
			}
		});
		return true;
	}
}
