import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DialogService } from "projects/core/src/lib/services/dialog.service";
import { DialogComponent } from "./dialog.component";

describe("DialogComponent", () => {
	let component: DialogComponent;
	let fixture: ComponentFixture<DialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DialogComponent],
			providers: [DialogService]
		}).compileComponents();

		fixture = TestBed.createComponent(DialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
