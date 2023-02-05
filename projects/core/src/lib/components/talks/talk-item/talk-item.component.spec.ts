import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TalkItemComponent } from "@jsmu/core";
import { SortPipe } from "../../../pipes/sort/sort.pipe";

describe("TalkItemComponent", () => {
	let component: TalkItemComponent;
	let fixture: ComponentFixture<TalkItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalkItemComponent, SortPipe]
		}).compileComponents();

		fixture = TestBed.createComponent(TalkItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
