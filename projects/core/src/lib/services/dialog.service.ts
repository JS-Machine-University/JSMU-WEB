import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DialogType } from "../models/dialogType";

@Injectable()
export class DialogService {
	public $isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public $dialogType: BehaviorSubject<DialogType> = new BehaviorSubject<DialogType>(
		DialogType.NONE
	);

	public openDialog(dialogType: DialogType): void {
		this.$isOpen.next(true);
		this.$dialogType.next(dialogType);
	}
	public closeDialog(): void {
		this.$isOpen.next(false);
		this.$dialogType.next(DialogType.NONE);
	}
}
