import { Roles } from "../../authorization/models/roles";
import * as userSelectors from "./user.selectors";
import { EntityStatus } from "./models/entityStatus";
import { UserState } from "./models/userState";

describe("UserSelectors", () => {
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

	it("Should get user", () => {
		const result = userSelectors.selectUserFeature.projector(initialState);

		expect(result).toBeDefined();
		expect(result.user.value.name).toEqual("testName");
	});
});
