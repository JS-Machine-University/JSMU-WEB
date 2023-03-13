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

	it("should dispatch setUser", () => {
		const expectedAction = userActions.setUser;
		userFacade.setUser(initialState);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ user: initialState }));
	});

	it("should dispatch setUid", () => {
		const expectedAction = userActions.setUid;
		userFacade.setUid(initialState.uid!);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ uid: initialState.uid! }));
	});

	it("should dispatch setName", () => {
		const expectedAction = userActions.setName;
		userFacade.setName(initialState.name!);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ name: initialState.name! }));
	});

	it("should dispatch setMail", () => {
		const expectedAction = userActions.setMail;
		userFacade.setMail(initialState.email!);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ email: initialState.email! }));
	});

	it("should dispatch setRole", () => {
		const expectedAction = userActions.setRole;
		userFacade.setRole(initialState.role!);

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction({ role: initialState.role! }));
	});

	it("should dispatch setPhoto", () => {
		const expectedAction = userActions.setPhoto;
		userFacade.setPhoto(initialState.photoURL!);

		expect(store.dispatch).toHaveBeenCalledWith(
			expectedAction({ photoUrl: initialState.photoURL! })
		);
	});

	it("should dispatch setVerified", () => {
		const expectedAction = userActions.setVerified;
		userFacade.setVerified(initialState.isVerified!);

		expect(store.dispatch).toHaveBeenCalledWith(
			expectedAction({ isVerified: initialState.isVerified! })
		);
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
