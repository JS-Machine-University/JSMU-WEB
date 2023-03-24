import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewEncapsulation
} from "@angular/core";

@Component({
	selector: "jsmu-info-panel",
	templateUrl: "./info-panel.component.html",
	styleUrls: ["./info-panel.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPanelComponent implements OnInit {
	@Output() isModalOpen = new EventEmitter();
	public date: Date = new Date();

	ngOnInit(): void {
		document.body.classList.add("jsmu-info-panel__open");
	}

	public closeModal(): void {
		this.isModalOpen.emit();
	}
}
