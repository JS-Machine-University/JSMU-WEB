import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TalkItemComponent } from "@jsmu/common-components";
import { talkMock } from "../../../assets/test/talkMocks";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("TalkItemComponent", () => {
	let component: TalkItemComponent;
	let fixture: ComponentFixture<TalkItemComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalkItemComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(TalkItemComponent);
		component = fixture.componentInstance;
		component.talk = talkMock;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
