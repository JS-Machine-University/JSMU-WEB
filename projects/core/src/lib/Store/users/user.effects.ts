import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersDataService } from "../../services/users.data.service";
import * as userActions from "./user.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "../../authorization/services/auth/auth.service";
import { UserStoreFacade } from "./users.store.facade";

@Injectable()
export class UserEffects {
	constructor(
		private actions$: Actions,
		private userService: UsersDataService,
		private userAuth: AuthService,
		private userFacade: UserStoreFacade
	) {}

	loadUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(userActions.loadUser),
			exhaustMap((action) =>
				this.userService.getUserById(action.uid).pipe(
					map((user) => {
						if (!user) {
							this.userFacade.setCheckBase();
						}
						return userActions.loadUserSuccess({ user: user! });
					}),
					catchError(() => of(userActions.loadUserFailure()))
				)
			)
		);
	});

	saveUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(userActions.saveUser),
			exhaustMap((action) =>
				this.userService.saveUserWithCheck(action.user).pipe(
					map((state) => userActions.saveUserSuccess({ isUserPresentDB: true })),
					catchError(() => of(userActions.saveUserFailure))
				)
			)
		);
	});

	authUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(userActions.authUser),
			exhaustMap(() =>
				this.userAuth.getUser().pipe(
					map((user) => {
						return userActions.authUserSuccess({ user: user! });
					}),
					catchError((error) => of(userActions.authUserFailure({ error: error })))
				)
			)
		);
	});
}
