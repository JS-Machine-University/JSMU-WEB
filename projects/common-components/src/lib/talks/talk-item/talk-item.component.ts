import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Talk } from "@jsmu/core";

@Component({
	selector: "jsmu-talk-item",
	templateUrl: "./talk-item.component.html",
	styleUrls: ["./talk-item.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkItemComponent {
	@Input() public talk!: Talk;
	@Input() public isShowLine!: boolean;
}
