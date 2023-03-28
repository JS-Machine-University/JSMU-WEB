import { Injectable } from "@angular/core";
import { User } from "../../models/user";
import * as auth from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { Routes } from "../../models/routes";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	constructor(
		private afs: AngularFirestore,
		private afAuth: AngularFireAuth,
		private router: Router,
		private userFacade: UserStoreFacade
	) {
		this.checkAuthState();
	}

	private checkAuthState(): void {
		this.afAuth.authState.subscribe((user) => {
			localStorage.setItem("user", JSON.stringify(user));
		});
	}

	public get isLoggedIn(): Observable<boolean> {
		return this.afAuth.user.pipe(
			map((user) => {
				return Boolean(user?.uid);
			})
		);
	}

	public gitHubAuth(): Promise<void> {
		return this.authLogin(new auth.GithubAuthProvider()).then(() => {});
	}

	public getUser(): Observable<User> {
		return this.afAuth.user.pipe(
			map((user) => {
				return {
					uid: user?.uid,
					email: user?.email,
					name: user?.displayName,
					photoURL: user?.photoURL,
					isUserAuth: true,
					isUserPresentDB: false,
					checkBase: false
				};
			})
		);
	}

	private authLogin(provider: any): Promise<void> {
		return this.afAuth
			.signInWithPopup(provider)
			.then((result) => {
				if (result.user !== null) {
					this.userFacade.authUser();
					this.setUserData(result.user);
				}
			})
			.catch((error) => {
				window.alert(error);
			});
	}

	private setUserData(user: firebase.default.User): Promise<void> {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			name: user.displayName,
			photoURL: user.photoURL,
			isUserPresentDB: false,
			checkBase: false,
			isUserAuth: true
		};
		return userRef.set(userData, {
			merge: true
		});
	}

	public signOut(): Promise<void> {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem("user");
			this.router.navigate([Routes.HOME]);
		});
	}
}
