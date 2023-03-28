import { userReducer } from "./user.reducer";
import { User } from "../../authorization/models/user";
import * as userActions from "./user.actions";

describe("UserReducer", () => {
	const initialState: User = {
		uid: null,
		role: null,
		name: null,
		email: null,
		photoURL: null,
		isUserAuth: false,
		isUserPresentDB: false,
		checkBase: false
	};

	it("should return the default state", () => {
		const action = { type: "NOOP" } as any;
		const result = userReducer(undefined, action);

		expect(result).toEqual(initialState);
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

		expect(result).toEqual({ ...initialState, name: "testName" });
	});
});
