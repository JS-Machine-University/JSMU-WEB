import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { User } from "../../authorization/models/user";
import {
	selectMail,
	selectName,
	selectPhoto,
	selectRole,
	selectUid,
	selectUserFeature,
	selectVerified
} from "./user.selectors";
import { Roles } from "../../authorization/models/roles";
import { Observable } from "rxjs";
import * as userActions from "./user.actions";

@Injectable()
export class UserStoreFacade {
	constructor(private store$: Store) {}

	public getUser(): Observable<User> {
		return this.store$.pipe(select(selectUserFeature));
	}

	public getUserUid(): Observable<string | undefined> {
		return this.store$.pipe(select(selectUid));
	}

	public getUserName(): Observable<string | null | undefined> {
		return this.store$.pipe(select(selectName));
	}

	public getUserMail(): Observable<string | null | undefined> {
		return this.store$.pipe(select(selectMail));
	}

	public getUserVerified(): Observable<boolean | undefined> {
		return this.store$.pipe(select(selectVerified));
	}

	public getUserRole(): Observable<Roles | undefined> {
		return this.store$.pipe(select(selectRole));
	}

	public getUserPhoto(): Observable<string | null | undefined> {
		return this.store$.pipe(select(selectPhoto));
	}

	public setUser(user: User): void {
		this.store$.dispatch(userActions.setUser({ user: user }));
	}

	public setUid(uid: string): void {
		this.store$.dispatch(userActions.setUid({ uid: uid }));
	}

	public setName(name: string): void {
		this.store$.dispatch(userActions.setName({ name: name }));
	}

	public setMail(mail: string): void {
		this.store$.dispatch(userActions.setMail({ email: mail }));
	}

	public setVerified(isVerified: boolean): void {
		this.store$.dispatch(userActions.setVerified({ isVerified: isVerified }));
	}

	public setRole(role: Roles): void {
		this.store$.dispatch(userActions.setRole({ role: role }));
	}

	public setPhoto(photo: string): void {
		this.store$.dispatch(userActions.setPhoto({ photoUrl: photo }));
	}

	public loadUser(uid: string): void {
		this.store$.dispatch(userActions.loadUser({ uid: uid }));
	}

	public saveUser(user: User): void {
		this.store$.dispatch(userActions.saveUser({ user: user }));
	}
}
