import { userReducer } from "./user.reducer";
import * as userActions from "./user.actions";
import { EntityStatus } from "./models/EntityStatus";
import { UserState } from "./models/UserState";

describe("UserReducer", () => {
	const initialState: UserState = {
		user: {
			status: EntityStatus.INIT,
			value: {
				uid: null,
				role: null,
				name: null,
				email: null,
				photoURL: null,
				isUserAuth: false,
				isUserPresentDB: false,
				checkBase: false
			},
			error: null
		}
	};

	it("should return the default state", () => {
		const action = { type: "NOOP" } as any;
		const result = userReducer(undefined, action);

		expect(result).toEqual(initialState);
	});

	it("should set status PENDING on authUser", () => {
		const action = userActions.authUser();
		const result = userReducer(initialState, action);

		expect(result).toEqual({
			...initialState,
			user: {
				...initialState.user,
				status: EntityStatus.PENDING
			}
		});
	});

	it("should set User on authSuccess", () => {
		const action = userActions.authUserSuccess({
			user: {
				uid: null,
				role: null,
				name: "testName",
				email: null,
				photoURL: null,
				isUserAuth: false,
				isUserPresentDB: false,
				checkBase: false
			}
		});
		const result = userReducer(initialState, action);

		expect(result).toEqual({
			user: {
				status: EntityStatus.SUCCESS,
				value: { ...initialState.user.value, name: "testName" },
				error: null
			}
		});
	});

	it("should set status PENDING on loadUser", () => {
		const action = userActions.loadUser({ uid: "testUID" });
		const result = userReducer(initialState, action);

		expect(result).toEqual({
			...initialState,
			user: {
				...initialState.user,
				status: EntityStatus.PENDING
			}
		});
	});

	it("should set User on loadSuccess", () => {
		const action = userActions.loadUserSuccess({
			user: {
				uid: null,
				role: null,
				name: "testName",
				email: null,
				photoURL: null,
				isUserAuth: false,
				isUserPresentDB: false,
				checkBase: false
			}
		});
		const result = userReducer(initialState, action);

		expect(result).toEqual({
			...initialState,
			user: {
				status: EntityStatus.SUCCESS,
				value: { ...initialState.user.value, name: "testName" },
				error: null
			}
		});
	});
});
