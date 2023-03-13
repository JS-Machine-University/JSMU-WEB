import { Component, OnInit } from "@angular/core";
import { DialogType } from "projects/core/src/lib/models/dialogType";
import { DialogService } from "projects/core/src/lib/services/dialog.service";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "jsmu-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	public dialogType!: DialogType;
	public $isOpen!: BehaviorSubject<boolean>;
	public $dialogType!: BehaviorSubject<DialogType>;

	constructor(private dialogService: DialogService) {}
	ngOnInit(): void {
		this.$dialogType = this.dialogService.$dialogType;
		this.$isOpen = this.dialogService.$isOpen;
	}

	public openDialog(): void {
		this.dialogService.openDialog(DialogType.CONFIRMATION);
	}
}
