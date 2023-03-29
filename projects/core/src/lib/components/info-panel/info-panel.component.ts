import { ChangeDetectionStrategy, Component } from "@angular/core";
import { InfoModalService } from "../../services/info-modal.service";

@Component({
	selector: "jsmu-info-panel",
	templateUrl: "./info-panel.component.html",
	styleUrls: ["./info-panel.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPanelComponent {
	public date: Date = new Date();

	constructor(private infoModalService: InfoModalService) {}

	public closeModal(): void {
		this.infoModalService.subjectEmitter(false);
	}
}
