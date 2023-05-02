import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";
import { mergeMap, Observable } from "rxjs";
import { Routes } from "../../models/routes";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { UsersDataService } from "../../../services/users.data.service";
@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private router: Router,
		private userFacade: UserStoreFacade,
		private userService: UsersDataService
	) {}

	public canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		this.authService.isLoggedIn.subscribe((state) => {
			if (!state) {
				this.router.navigate([Routes.SIGN_IN]);
			} else {
				this.authService
					.getUser()
					.pipe(
						mergeMap((user) => {
							return this.userService.getUserById(user.uid!);
						})
					)
					.subscribe((user) => {
						if (user === null) {
							this.router.navigate([Routes.REGISTRATION]);
						} else if (user === undefined) {
						} else {
							this.userFacade.loadUser(user.uid!);
							//toDo redirect to MenteeDashBoard
							this.router.navigate([Routes.MENTEE_PAGE]);
						}
					});
			}
		});
		return true;
	}
}
