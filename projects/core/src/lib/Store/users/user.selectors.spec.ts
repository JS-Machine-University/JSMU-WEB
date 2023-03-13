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

	it("Should ger Uid", () => {
		const result = userSelectors.selectUid.projector(initialState);

		expect(result).toEqual("testUid");
	});

	it("Should ger Name", () => {
		const result = userSelectors.selectName.projector(initialState);

		expect(result).toEqual("testName");
	});

	it("Should ger Mail", () => {
		const result = userSelectors.selectMail.projector(initialState);

		expect(result).toEqual("testMail");
	});

	it("Should ger Role", () => {
		const result = userSelectors.selectRole.projector(initialState);

		expect(result).toEqual(Roles.MENTEE);
	});

	it("Should ger PhotoUrl", () => {
		const result = userSelectors.selectPhoto.projector(initialState);

		expect(result).toEqual("testUrl");
	});

	it("Should ger Verified", () => {
		const result = userSelectors.selectVerified.projector(initialState);

		expect(result).toEqual(true);
	});
});
