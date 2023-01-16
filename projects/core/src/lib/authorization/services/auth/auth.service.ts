import { Injectable } from "@angular/core";
import { User } from "../../models/user";
import * as auth from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { filter, map, Observable, reduce } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	constructor(
		public afs: AngularFirestore,
		public afAuth: AngularFireAuth,
		public router: Router
	) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				localStorage.setItem("user", JSON.stringify(user));
			} else {
				localStorage.setItem("user", "null");
			}
		});
	}

	public get isLoggedIn(): Observable<boolean> {
		return this.afAuth.user.pipe(
			map((user) => {
				return user?.uid != null && user.uid != undefined;
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
					displayName: user?.displayName,
					photoURL: user?.photoURL,
					emailVerified: user?.emailVerified
				};
			})
		);
	}
	public authLogin(provider: any): Promise<void> {
		return this.afAuth
			.signInWithPopup(provider)
			.then((result) => {
				this.setUserData(result.user);
			})
			.catch((error) => {
				window.alert(error);
			});
	}
	public setUserData(user: any): Promise<void> {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			emailVerified: user.emailVerified
		};
		return userRef.set(userData, {
			merge: true
		});
	}

	public signOut(): Promise<void> {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem("user");
			this.router.navigate(["sign-in"]);
		});
	}
}
