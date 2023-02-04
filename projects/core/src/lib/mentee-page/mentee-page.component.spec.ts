import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LessonsDataService } from "../services/lessons.data.service";
import { MenteePageComponent } from "./mentee-page.component";

describe("MenteePageComponent", () => {
	let component: MenteePageComponent;
	let fixture: ComponentFixture<MenteePageComponent>;
	let http: HttpTestingController;
	let lesson1 = {
		id: "",
		title: "",
		resources: [{ url: "", name: "" }],
		duration: ""
	};
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MenteePageComponent],
			providers: [LessonsDataService],
			imports: [HttpClientTestingModule]
		}).compileComponents();
		http = TestBed.inject(HttpTestingController);
		fixture = TestBed.createComponent(MenteePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeDefined();
	});

	it("should be able to save Lessons", () => {
		expect(component["saveLesson"](lesson1)).toBeTruthy();
	});
});
