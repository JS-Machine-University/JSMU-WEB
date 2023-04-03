import { TestBed } from "@angular/core/testing";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "src/environments/environment";

import { AuthService } from "./auth.service";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { provideMockStore } from "@ngrx/store/testing";

describe("AuthService", () => {
	let service: AuthService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AngularFireModule.initializeApp(environment.firebaseConfig),
				AngularFireDatabaseModule
			],
			providers: [UserStoreFacade, provideMockStore({})]
		});
		service = TestBed.inject(AuthService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
