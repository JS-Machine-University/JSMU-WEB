import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TalkItemComponent } from "@jsmu/common-components";
import { Result } from "@jsmu/core";

describe("TalkItemComponent", () => {
	let component: TalkItemComponent;
	let fixture: ComponentFixture<TalkItemComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalkItemComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TalkItemComponent);
		component = fixture.componentInstance;
		component.talk = {
			lessonId: "",
			menteeId: "",
			expertId: "",
			inProgress: true,
			result: Result.comment,
			resultDate: new Date(new Date().getTime()),
			submitDate: new Date()
		};
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
