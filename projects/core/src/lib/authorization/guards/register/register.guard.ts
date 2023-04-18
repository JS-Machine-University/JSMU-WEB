import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { mergeMap, Observable } from "rxjs";
import { AuthService } from "../../services/auth/auth.service";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { UsersDataService } from "../../../services/users.data.service";
import { Routes } from "../../models/routes";

@Injectable({
	providedIn: "root"
})
export class RegisterGuard implements CanActivate {
	constructor(
		public authService: AuthService,
		public router: Router,
		public userFacade: UserStoreFacade,
		public userService: UsersDataService
	) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		this.authService
			.getUser()
			.pipe(
				mergeMap((user) => {
					return this.userService.getUserById(user.uid!);
				})
			)
			.subscribe((user) => {
				console.log(user);
				if (!user) {
					this.router.navigate([Routes.ROLE_SELECT]);
				} else {
					this.userFacade.loadUser(user.uid!);
					//toDo redirect to MenteePage
				}
			});
		return true;
	}
}
