import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Talk } from "@jsmu/core";

@Component({
	selector: "jsmu-talk-items-line",
	templateUrl: "./talk-items-line.component.html",
	styleUrls: ["./talk-items-line.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkItemsLineComponent {
	@Input() public talkItem!: Talk;
}
