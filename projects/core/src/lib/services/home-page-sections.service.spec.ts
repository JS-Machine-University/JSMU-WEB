import { TestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { HomePageSectionsService } from "./home-page-sections.service";

describe("HomePageSectionsService", () => {
	let service: HomePageSectionsService;
	let http: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [HomePageSectionsService],
			imports: [HttpClientTestingModule]
		});
		service = TestBed.inject(HomePageSectionsService);
		http = TestBed.inject(HttpTestingController);
	});
	afterEach(() => {
		http.verify();
	});
	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
