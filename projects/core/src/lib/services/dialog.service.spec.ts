import { TestBed } from "@angular/core/testing";
import { BehaviorSubject } from "rxjs";
import { DialogType } from "../models/dialogType";
import { DialogService } from "./dialog.service";

describe("DialogService", () => {
	let dialogService: DialogService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [DialogService]
		});
		dialogService = TestBed.inject(DialogService);
	});
	it("should be created", () => {
		expect(dialogService).toBeTruthy();
	});
	it("should change value of OpenDialog variable to true", () => {
		let $isOpen: BehaviorSubject<boolean> = dialogService.$isOpen;
		dialogService.openDialog(DialogType.CONFIRMATION);
		$isOpen.subscribe((res) => {
			expect(res).toEqual(true);
		});
	});
	it("should set value of DialogType variable based on argument", () => {
		let $dialogType: BehaviorSubject<DialogType> = dialogService.$dialogType;
		dialogService.openDialog(DialogType.CONFIRMATION);
		$dialogType.subscribe((res) => {
			expect(res).toEqual(DialogType.CONFIRMATION);
		});
	});
});
