import { Component, OnInit } from "@angular/core";
import { DialogType } from "projects/core/src/lib/models/dialogType";
import { DialogService } from "projects/core/src/lib/services/dialog.service";
import { BehaviorSubject, Subject } from "rxjs";
import { InfoModalService } from "../../projects/core/src/lib/services/info-modal.service";

@Component({
	selector: "jsmu-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	public dialogType!: DialogType;
	public $isOpen!: BehaviorSubject<boolean>;
	public $dialogType!: BehaviorSubject<DialogType>;
	isModalOpen!: Subject<boolean>;

	constructor(private dialogService: DialogService, private infoModalService: InfoModalService) {}
	ngOnInit(): void {
		this.$dialogType = this.dialogService.$dialogType;
		this.$isOpen = this.dialogService.$isOpen;
		this.isModalOpen = this.infoModalService.isModalOpen;
	}
}
