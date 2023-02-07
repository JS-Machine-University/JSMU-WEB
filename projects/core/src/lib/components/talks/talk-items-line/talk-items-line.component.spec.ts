import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Result, TalkItemsLineComponent } from "@jsmu/core";

describe("TalkItemsLineComponent", () => {
	let component: TalkItemsLineComponent;
	let fixture: ComponentFixture<TalkItemsLineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalkItemsLineComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TalkItemsLineComponent);
		component = fixture.componentInstance;
		component.talkItem = {
			lessonId: "",
			menteeId: "",
			expertId: "",
			inProgress: true,
			result: Result.comment,
			resultDate: new Date(),
			submitDate: new Date()
		};

		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
