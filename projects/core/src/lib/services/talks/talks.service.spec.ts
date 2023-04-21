import { TestBed } from "@angular/core/testing";

import { TalksService } from "./talks.service";
import { DataBaseService } from "../database.service";
import { Talk } from "@jsmu/core";
import createSpyObj = jasmine.createSpyObj;

describe("TalksService", () => {
	let service: TalksService;
	let dbService: DataBaseService<Talk> = createSpyObj(["getData"]);

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: DataBaseService, useValue: dbService }]
		});
		service = TestBed.inject(TalksService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
