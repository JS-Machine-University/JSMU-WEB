import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../../authorization/models/user";
import { selectUserFeature } from "./user.selectors";
import { Observable } from "rxjs";
import * as userActions from "./user.actions";

@Injectable()
export class UserStoreFacade {
	constructor(private store: Store) {}

	public getUser(): Observable<User | null> {
		return this.store.select(selectUserFeature);
	}

	public loadUser(uid: string): void {
		this.store.dispatch(userActions.loadUser({ uid: uid }));
	}

	public saveUser(user: User): void {
		this.store.dispatch(userActions.saveUser({ user: user }));
	}
}
