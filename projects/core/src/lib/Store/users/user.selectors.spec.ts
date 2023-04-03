import { Roles } from "../../authorization/models/roles";
import * as userSelectors from "./user.selectors";
import { UserState } from "./models/UserState";
import { EntityStatus } from "./models/EntityStatus";

describe("UserSelectors", () => {
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

	it("Should get user", () => {
		const result = userSelectors.selectUserFeature.projector(initialState);

		expect(result).toBeDefined();
		expect(result.value.name).toEqual("testName");
	});
});
