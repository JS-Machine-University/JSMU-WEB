import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomePageSection } from "../../models/home-page-section";
import { HomePageComponent } from "./home-page.component";
import sections from "../../../../../../src/assets/jsons/sections.json";

describe("HomePageComponent", () => {
	let component: HomePageComponent;
	let fixture: ComponentFixture<HomePageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomePageComponent],
			imports: [HttpClientTestingModule]
		}).compileComponents();
		fixture = TestBed.createComponent(HomePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should get sections", () => {
		expect(component.sections).toEqual(sections);
	});
});
