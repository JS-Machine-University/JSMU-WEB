import { Talk } from "../../../models/talk";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "jsmu-talk-items-line",
	templateUrl: "./talk-items-line.component.html",
	styleUrls: ["./talk-items-line.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkItemsLineComponent {
	@Input() public talkItem!: Talk;
}
