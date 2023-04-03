import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../../authorization/models/user";
import { selectUserFeature } from "./user.selectors";
import { Observable } from "rxjs";
import * as userActions from "./user.actions";
import { UserState } from "./models/UserState";

@Injectable()
export class UserStoreFacade {
	constructor(private store: Store) {}

	public getUser(): Observable<UserState | null> {
		return this.store.select(selectUserFeature);
	}

	public loadUser(uid: string): void {
		this.store.dispatch(userActions.loadUser({ uid: uid }));
	}

	public saveUser(user: User): void {
		this.store.dispatch(userActions.saveUser({ user: user }));
	}

	public authUser(): void {
		this.store.dispatch(userActions.authUser());
	}

	public signOut(): void {
		this.store.dispatch(userActions.signOut());
	}

	public setCheckBase(): void {
		this.store.dispatch(userActions.setCheckBase());
	}
}
