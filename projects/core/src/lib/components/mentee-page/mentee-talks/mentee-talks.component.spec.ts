import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenteeTalksComponent } from "./mentee-talks.component";
import { Store } from "@ngrx/store";
import createSpyObj = jasmine.createSpyObj;
import { MenteeTalksFacadeService } from "@jsmu/core";
import { Observable, of } from "rxjs";
import { talkMock } from "../../../../../../../src/assets/tests/talkMocks";
import { MenteeDataService } from "../../../services/mentee.data.service";
import { User } from "../../../authorization/models/user";
import { Roles } from "../../../authorization/models/roles";
import { UserState } from "../../../Store/users/models/userState";
import { EntityStatus } from "../../../Store/users/models/entityStatus";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { provideMockStore } from "@ngrx/store/testing";

describe("MenteeTalksComponent", () => {
	let component: MenteeTalksComponent;
	let fixture: ComponentFixture<MenteeTalksComponent>;
	let store: Store = jasmine.createSpyObj(["select", "dispatch"]);
	let facade = jasmine.createSpyObj(["selectMenteeTalks", "dispatchMenteeTalksLoading"]);
	let menteeService: MenteeDataService;
	let userFacade: UserStoreFacade;

	const testUser: User = {
		uid: undefined,
		name: undefined,
		email: undefined,
		photoURL: undefined,
		role: Roles.MENTEE,
		isUserAuth: true,
		isUserPresentDB: true,
		checkBase: true
	};

	const testUserState: UserState = {
		user: {
			status: EntityStatus.INIT,
			value: testUser,
			error: null
		}
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenteeTalksComponent],
			providers: [
				{ provide: MenteeTalksFacadeService, useValue: facade },
				{ provide: MenteeDataService, useValue: {} },
				UserStoreFacade,
				provideMockStore({})
			]
		}).compileComponents();

		fixture = TestBed.createComponent(MenteeTalksComponent);
		menteeService = TestBed.inject(MenteeDataService);
		facade.selectMenteeTalks.and.returnValue(of(talkMock));
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
