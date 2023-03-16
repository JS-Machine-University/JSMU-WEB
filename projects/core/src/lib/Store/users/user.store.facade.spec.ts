import * as userActions from "./user.actions";
import createSpyObj = jasmine.createSpyObj;
import { User } from "../../authorization/models/user";
import { Store } from "@ngrx/store";
import { UserStoreFacade } from "./user.store.facade";
import { Roles } from "../../authorization/models/roles";

describe("UserStoreFacade", () => {
	const initialState: User = {
		uid: "testUid",
		name: "testName",
		email: "testMail",
		role: Roles.MENTEE,
		photoURL: "testUrl",
		isVerified: true
	};
	let userFacade: UserStoreFacade;
	let store: Store;

	beforeEach(() => {
		store = createSpyObj<Store<User>>("store", ["dispatch"]);
		userFacade = new UserStoreFacade(store);
	});

	it("should dispatch loadUser", () => {
		const expectedAction = userActions.loadUser;
		userFacade.loadUser(initialState.uid!);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ uid: initialState.uid! }));
	});

	it("should dispatch saveUser", () => {
		const expectedAction = userActions.saveUser;
		userFacade.saveUser(initialState);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ user: initialState }));
	});
});
