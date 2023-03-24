import { TestBed } from "@angular/core/testing";
import { toArray } from "rxjs";
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
	describe("OpenDialog method", () => {
		it("should change value of OpenDialog variable to true", () => {
			dialogService.openDialog(DialogType.CONFIRMATION);
			dialogService.$isOpen.pipe(toArray()).subscribe((res) => {
				expect(res).toBe([false, true]);
			});
		});
		it("should set value of DialogType variable based on argument", () => {
			dialogService.openDialog(DialogType.CONFIRMATION);
			dialogService.$dialogType.pipe(toArray()).subscribe((res) => {
				expect(res).toBe([DialogType.NONE, DialogType.CONFIRMATION]);
			});
		});
	});
	describe("CloseDialog method", () => {
		it("should change value of OpenDialog variable to false", () => {
			dialogService.closeDialog();
			dialogService.$isOpen.pipe(toArray()).subscribe((res) => {
				expect(res).toBe([true, false]);
			});
		});
		it("should set value of DialogType variable as NONE", () => {
			dialogService.closeDialog();
			dialogService.$dialogType.pipe(toArray()).subscribe((res) => {
				expect(res).toBe([DialogType.CONFIRMATION, DialogType.NONE]);
			});
		});
	});
});
