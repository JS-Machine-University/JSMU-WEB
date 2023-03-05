import { Component } from "@angular/core";
import { DialogType } from "projects/core/src/lib/models/dialogType";
import { DialogService } from "projects/core/src/lib/services/dialog.service";

@Component({
	selector: "jsmu-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	constructor(public dialogService: DialogService) {}

	public openDialog(): void {
		this.dialogService.openDialog(DialogType.CONFIRMATION);
	}
}
