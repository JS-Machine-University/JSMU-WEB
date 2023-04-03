import * as userActions from "./user.actions";
import { Store } from "@ngrx/store";
import { Roles } from "../../authorization/models/roles";
import { UserStoreFacade } from "./users.store.facade";
import { EntityStatus } from "./models/EntityStatus";
import createSpyObj = jasmine.createSpyObj;
import { UserState } from "./models/UserState";

describe("UserStoreFacade", () => {
	const initialState: UserState = {
		user: {
			status: EntityStatus.INIT,
			value: {
				uid: "testUid",
				name: "testName",
				email: "testMail",
				role: Roles.MENTEE,
				photoURL: "testUrl"
			},
			error: null
		}
	};
	let userFacade: UserStoreFacade;
	let store: Store;

	beforeEach(() => {
		store = createSpyObj<Store<UserState>>("store", ["dispatch"]);
		userFacade = new UserStoreFacade(store);
	});

	it("should dispatch loadUser", () => {
		const expectedAction = userActions.loadUser;
		userFacade.loadUser(initialState.user.value.uid!);

		expect(store.dispatch).toHaveBeenCalledWith(
			expectedAction({ uid: initialState.user.value.uid! })
		);
	});

	it("should dispatch saveUser", () => {
		const expectedAction = userActions.saveUser;
		userFacade.saveUser(initialState.user.value);

		expect(store.dispatch).toHaveBeenCalledWith(
			expectedAction({ user: initialState.user.value })
		);
	});
});
