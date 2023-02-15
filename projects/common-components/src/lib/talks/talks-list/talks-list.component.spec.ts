import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TalksListComponent } from "@jsmu/common-components";
import { talksMock } from "../../../../../../src/assets/tests/talkMocks";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SortPipe } from "@jsmu/shared";

describe("TalksPageComponent", () => {
	let component: TalksListComponent;
	let fixture: ComponentFixture<TalksListComponent>;
	let index: number = 1;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalksListComponent, SortPipe],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(TalksListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.talks = talksMock;
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should return true if resultDates are different", () => {
		const res = spyOn(component, "isShowLine").and.callThrough();
		component.isShowLine(index);
		expect(res).toBeTruthy();
	});
});
