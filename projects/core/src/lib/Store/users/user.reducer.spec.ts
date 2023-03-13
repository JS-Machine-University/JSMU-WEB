import { userReducer } from "./user.reducer";
import { User } from "../../authorization/models/user";
import * as userActions from "./user.actions";
import { Roles } from "../../authorization/models/roles";

describe("UserReducer", () => {
	const initialState: User = {
		uid: undefined,
		role: undefined,
		name: undefined,
		email: undefined,
		isVerified: undefined,
		photoURL: undefined
	};

	it("should return the default state", () => {
		const action = { type: "NOOP" } as any;
		const result = userReducer(undefined, action);

		expect(result).toEqual(initialState);
	});

	it("should set User", () => {
		const action = userActions.setUser({
			user: {
				uid: undefined,
				role: undefined,
				name: "testName",
				email: undefined,
				isVerified: undefined,
				photoURL: undefined
			}
		});
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, name: "testName" });
	});

	it("should set Uid", () => {
		const action = userActions.setUid({ uid: "testUid" });
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, uid: "testUid" });
	});

	it("should set Name", () => {
		const action = userActions.setName({ name: "testName" });
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, name: "testName" });
	});

	it("should set Role", () => {
		const action = userActions.setRole({ role: Roles.MENTEE });
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, role: Roles.MENTEE });
	});

	it("should set Mail", () => {
		const action = userActions.setMail({ email: "testMail" });
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, email: "testMail" });
	});

	it("should set Verified", () => {
		const action = userActions.setVerified({ isVerified: true });
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, isVerified: true });
	});

	it("should set PhotoUrl", () => {
		const action = userActions.setPhoto({ photoUrl: "testUrl" });
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, photoURL: "testUrl" });
	});

	it("should set User on loadSuccess", () => {
		const action = userActions.loadUserSuccess({
			user: {
				uid: undefined,
				role: undefined,
				name: "testName",
				email: undefined,
				isVerified: undefined,
				photoURL: undefined
			}
		});
		const result = userReducer(initialState, action);

		expect(result).toEqual({ ...initialState, name: "testName" });
	});
});
