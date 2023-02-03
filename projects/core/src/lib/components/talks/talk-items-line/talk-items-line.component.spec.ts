import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TalkItemsLineComponent } from "@jsmu/core";

describe("TalkItemsLineComponent", () => {
	let component: TalkItemsLineComponent;
	let fixture: ComponentFixture<TalkItemsLineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalkItemsLineComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(TalkItemsLineComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
