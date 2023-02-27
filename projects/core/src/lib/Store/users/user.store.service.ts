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
import {
	UserSetMailAction,
	UserSetNameAction,
	UserSetPhotoAction,
	UserSetRoleAction,
	UserSetUidAction,
	UserSetUserAction,
	UserSetVerifiedAction
} from "./user.actions";
import { Observable } from "rxjs";

@Injectable()
export class UserStoreService {
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
		this.store$.dispatch(new UserSetUserAction({ user: user }));
	}

	public setUid(uid: string): void {
		this.store$.dispatch(new UserSetUidAction({ uid: uid }));
	}

	public setName(name: string): void {
		this.store$.dispatch(new UserSetNameAction({ name: name }));
	}

	public setMail(mail: string): void {
		this.store$.dispatch(new UserSetMailAction({ email: mail }));
	}

	public setVerified(isVerified: boolean): void {
		this.store$.dispatch(new UserSetVerifiedAction({ isVerified: isVerified }));
	}

	public setRole(role: Roles): void {
		this.store$.dispatch(new UserSetRoleAction({ role: role }));
	}

	public setPhoto(photo: string): void {
		this.store$.dispatch(new UserSetPhotoAction({ photoUrl: photo }));
	}
}
