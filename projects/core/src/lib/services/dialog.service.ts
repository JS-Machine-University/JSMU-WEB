import { Injectable } from "@angular/core";

@Injectable()
export class DialogService {
	public title!: string;
	public message!: string;
	public state: boolean = false;
	public btnYes!: string;
	public btnNo!: string;

	public openDialog(type: string) {
		this.state = true;
		if (type === "confirmation") {
			this.title = "Confirmation";
			this.message = "Confirmation Message...";
			this.btnYes = "Ok";
			this.btnNo = "Cancel";
		} else if (type === "warning") {
			this.title = "Warning";
			this.message = "Warning Message...";
			this.btnYes = "Accept";
			this.btnNo = "Cancel";
		} else {
			this.title = "Error";
			this.message = "Error Message...";
		}
	}
}
