import { User } from "../../authorization/models/user";
import { Roles } from "../../authorization/models/roles";
import * as userSelectors from "./user.selectors";

describe("UserSelectors", () => {
	const initialState: User = {
		uid: "testUid",
		name: "testName",
		email: "testMail",
		role: Roles.MENTEE,
		photoURL: "testUrl",
		isVerified: true
	};

	it("Should get user", () => {
		const result = userSelectors.selectUserFeature.projector(initialState);

		expect(result).toBeDefined();
		expect(result.name).toEqual("testName");
	});
});
