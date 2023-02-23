import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";
import { HomePageSection } from "../../models/home-page-section";
import { HomePageSectionsService } from "../../services/home-page-sections.service";
import { HomePageComponent } from "./home-page.component";

describe("HomePageComponent", () => {
	let component: HomePageComponent;
	let fixture: ComponentFixture<HomePageComponent>;
	const expectedSections = [
		{ name: "1", title: "a" },
		{ name: "2", title: "b" }
	] as HomePageSection[];
	class MockSectionsService {
		public getSections(): Observable<HomePageSection[]> {
			return new Observable<HomePageSection[]>((subscriber) => {
				subscriber.next(expectedSections);
			});
		}
	}
	let mocksdb: MockSectionsService;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomePageComponent],
			providers: [HomePageSectionsService, MockSectionsService],
			imports: [HttpClientTestingModule]
		}).compileComponents();
		mocksdb = TestBed.inject(MockSectionsService);
		fixture = TestBed.createComponent(HomePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should get sections", () => {
		mocksdb.getSections().subscribe((sections: HomePageSection[]) => {
			component.sections = sections;
		});
		expect(component.sections).toEqual(expectedSections);
	});
});
