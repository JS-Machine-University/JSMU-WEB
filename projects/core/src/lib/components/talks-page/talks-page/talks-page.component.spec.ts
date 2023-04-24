import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TalksPageComponent } from "./talks-page.component";
import { Store } from "@ngrx/store";
import createSpyObj = jasmine.createSpyObj;

describe("TalksPageComponent", () => {
	let component: TalksPageComponent;
	let fixture: ComponentFixture<TalksPageComponent>;
	let store: Store = createSpyObj(["select", "dispatch"]);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TalksPageComponent],
			providers: [{ provide: Store, useValue: store }]
		}).compileComponents();

		fixture = TestBed.createComponent(TalksPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
