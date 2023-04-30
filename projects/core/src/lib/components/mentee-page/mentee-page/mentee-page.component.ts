import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "jsmu-mentee-page",
	templateUrl: "./mentee-page.component.html",
	styleUrls: ["./mentee-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenteePageComponent {}
