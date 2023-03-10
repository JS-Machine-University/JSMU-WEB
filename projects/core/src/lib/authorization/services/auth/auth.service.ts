import { Injectable } from "@angular/core";
import { User } from "../../models/user";
import * as auth from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	constructor(
		private afs: AngularFirestore,
		private afAuth: AngularFireAuth,
		private router: Router
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
					isVerified: user?.emailVerified
				};
			})
		);
	}

	private authLogin(provider: any): Promise<void> {
		return this.afAuth
			.signInWithPopup(provider)
			.then((result) => {
				if (result.user !== null) {
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
			isVerified: user.emailVerified
		};
		return userRef.set(userData, {
			merge: true
		});
	}

	public signOut(): Promise<void> {
		return this.afAuth.signOut().then(() => {
			localStorage.removeItem("user");
			this.router.navigate(["home-page"]);
		});
	}
}
