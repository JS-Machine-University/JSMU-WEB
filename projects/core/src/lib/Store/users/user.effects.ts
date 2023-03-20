import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersDataService } from "../../services/users.data.service";
import * as userActions from "./user.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UserState } from "./user.reducer";
import { AuthService } from "../../authorization/services/auth/auth.service";
import { UserStoreFacade } from "./users.store.facade";

@Injectable()
export class UserEffects {
	public isAuth!: boolean;
	public isPresentDB!: boolean;
	public checkBase!: boolean;

	constructor(
		private actions$: Actions,
		private userService: UsersDataService,
		private userAuth: AuthService,
		private userFacade: UserStoreFacade
	) {
		userAuth.isLoggedIn.subscribe((state) => {
			this.isAuth = state;
		});
		userFacade.getUser().subscribe((userState) => {
			this.isPresentDB = userState?.isUserPresentDB!;
			this.checkBase = userState?.checkBase!;
		});
	}

	loadUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(userActions.loadUser),
			exhaustMap((action) =>
				this.userService.getUserById(action.uid).pipe(
					map((user) => {
						let userData: UserState | null = null;
						if (user) {
							userData = {
								uid: user?.uid!,
								email: user?.email!,
								name: user?.name!,
								role: user?.role!,
								checkBase: true,
								photoURL: user?.photoURL!,
								isUserPresentDB: true,
								isUserAuth: this.isAuth
							};
						} else {
							this.userFacade.setCheckBase();
						}
						return userActions.loadUserSuccess({ user: userData! });
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
				this.userService.saveUserById(action.user).pipe(
					map(() => userActions.saveUserSuccess({ isUserPresentDB: true })),
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
						let userData: UserState;
						userData = {
							uid: user?.uid!,
							email: user?.email!,
							name: user?.name!,
							role: user?.role!,
							photoURL: user?.photoURL!,
							isUserPresentDB: this.isPresentDB,
							isUserAuth: this.isAuth
						};
						return userActions.authUserSuccess({ user: userData! });
					}),
					catchError(() => of(userActions.authUserFailure))
				)
			)
		);
	});
}
