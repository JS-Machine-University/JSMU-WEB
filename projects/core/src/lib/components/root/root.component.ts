import { Component, OnInit } from "@angular/core";
import { UserStoreFacade } from "../../Store/users/users.store.facade";
import { AuthService } from "../../authorization/services/auth/auth.service";
import { DialogType } from "../../models/dialogType";
import { BehaviorSubject, Subject } from "rxjs";
import { DialogService } from "../../services/dialog.service";
import { InfoModalService } from "../../services/info-modal.service";

@Component({
	selector: "jsmu-root-c",
	templateUrl: "./root.component.html",
	styleUrls: ["./root.component.scss"]
})
export class RootComponent implements OnInit {
	public isOpen$!: BehaviorSubject<boolean>;
	public dialogType$!: BehaviorSubject<DialogType>;
	public isModalOpen$!: Subject<boolean>;
	constructor(
		private userFacade: UserStoreFacade,
		private authService: AuthService,
		private dialogService: DialogService,
		private infoModalService: InfoModalService
	) {}
	ngOnInit(): void {
		this.authService.isLoggedIn.subscribe((state) => {
			if (state) {
				this.userFacade.authUser();
			}
		});
		this.dialogType$ = this.dialogService.$dialogType;
		this.isOpen$ = this.dialogService.$isOpen;
		this.isModalOpen$ = this.infoModalService.visibilityProperty$;
	}
}
