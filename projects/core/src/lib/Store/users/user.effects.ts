import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersDataService } from "../../services/users.data.service";
import * as userActions from "./user.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class UserEffects {
	constructor(private actions$: Actions, private userService: UsersDataService) {}

	loadUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(userActions.loadUser),
			exhaustMap((action) =>
				this.userService.getUserById(action.uid).pipe(
					map((user) => userActions.loadUserSuccess({ user: user! })),
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
					map(() => userActions.saveUserSuccess()),
					catchError(() => of(userActions.saveUserFailure))
				)
			)
		);
	});
}
