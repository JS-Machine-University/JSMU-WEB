import { TestBed } from "@angular/core/testing";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "src/environments/environment";
import { AuthGuard } from "./auth.guard";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { provideMockStore } from "@ngrx/store/testing";

describe("AuthGuard", () => {
	let guard: AuthGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AngularFireModule.initializeApp(environment.firebaseConfig),
				AngularFireDatabaseModule
			],
			providers: [UserStoreFacade, provideMockStore({})]
		});
		guard = TestBed.inject(AuthGuard);
	});

	it("should be created", () => {
		expect(guard).toBeTruthy();
	});
});
