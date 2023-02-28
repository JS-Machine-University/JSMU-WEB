import { Component } from "@angular/core";
import { DialogService } from "projects/core/src/lib/services/dialog.service";

@Component({
	selector: "jsmu-dialog",
	templateUrl: "./dialog.component.html",
	styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent {
	public title!: string;
	public message!: string;
	public state: boolean = false;
	public btnYes!: string;
	public btnNo!: string;

	constructor(private dialogService: DialogService) {}

	public openDialog(type: string) {
		this.dialogService.openDialog(type);
		this.state = this.dialogService.state;
		this.title = this.dialogService.title;
		this.message = this.dialogService.message;
		this.btnYes = this.dialogService.btnYes;
		this.btnNo = this.dialogService.btnNo;
	}
}
