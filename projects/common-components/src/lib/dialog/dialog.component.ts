import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { DialogType } from "projects/core/src/lib/models/dialogType";
import { DialogService } from "projects/core/src/lib/services/dialog.service";

@Component({
	selector: "jsmu-dialog",
	templateUrl: "./dialog.component.html",
	styleUrls: ["./dialog.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
	public DialogType = DialogType;

	@Input()
	dialogType!: DialogType | null;

	constructor(private dialogService: DialogService) {}

	public closeDialog(): void {
		this.dialogService.closeDialog();
	}
}
