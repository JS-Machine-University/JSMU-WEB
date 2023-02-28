import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "jsmu-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
	public date: Date = new Date();
}
