import * as userActions from "./user.actions";
import { User } from "../../authorization/models/user";
import { Store } from "@ngrx/store";
import { Roles } from "../../authorization/models/roles";
import { UserStoreFacade } from "./users.store.facade";
import { UserState } from "./models/UserState";
import { EntityStatus } from "./models/EntityStatus";
import createSpyObj = jasmine.createSpyObj;

describe("UserStoreFacade", () => {
	const initialState: UserState = {
		status: EntityStatus.INIT,
		value: {
			uid: "testUid",
			name: "testName",
			email: "testMail",
			role: Roles.MENTEE,
			photoURL: "testUrl"
		},
		error: null
	};
	let userFacade: UserStoreFacade;
	let store: Store;

	beforeEach(() => {
		store = createSpyObj<Store<UserState>>("store", ["dispatch"]);
		userFacade = new UserStoreFacade(store);
	});

	it("should dispatch loadUser", () => {
		const expectedAction = userActions.loadUser;
		userFacade.loadUser(initialState.value.uid!);

		expect(store.dispatch).toHaveBeenCalledWith(
			expectedAction({ uid: initialState.value.uid! })
		);
	});

	it("should dispatch saveUser", () => {
		const expectedAction = userActions.saveUser;
		userFacade.saveUser(initialState.value);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ user: initialState.value }));
	});
});
