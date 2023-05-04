import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenteeTalksComponent } from "./mentee-talks.component";
import { Store } from "@ngrx/store";
import createSpyObj = jasmine.createSpyObj;
import { MenteeTalksFacadeService } from "@jsmu/core";
import { of } from "rxjs";
import { talkMock } from "../../../../../../../src/assets/tests/talkMocks";

describe("MenteeTalksComponent", () => {
	let component: MenteeTalksComponent;
	let fixture: ComponentFixture<MenteeTalksComponent>;
	let store: Store = jasmine.createSpyObj(["select", "dispatch"]);
	let facade = jasmine.createSpyObj(["selectMenteeTalks", "dispatchMenteeTalksLoading"]);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenteeTalksComponent],
			providers: [{ provide: MenteeTalksFacadeService, useValue: facade }]
		}).compileComponents();

		fixture = TestBed.createComponent(MenteeTalksComponent);
		facade.selectMenteeTalks.and.returnValue(of(talkMock));
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});
});
