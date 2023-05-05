import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MenteeTalksFacadeService, Talk } from "@jsmu/core";
import { Status } from "projects/core/src/lib/models/status";

@Component({
	selector: "jsmu-talk-item",
	templateUrl: "./talk-item.component.html",
	styleUrls: ["./talk-item.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkItemComponent {
	@Input() public talk!: Talk;
	@Input() public isShowLine!: boolean;
	@Input() public submitPermission!: boolean;

	constructor(private menteeTalksFacade: MenteeTalksFacadeService) {}

	public updateStatus(): void {
		if (this.talk.id !== "null" && this.talk.status === "null" && this.submitPermission) {
			let updatedTalk: Talk = JSON.parse(JSON.stringify(this.talk));
			updatedTalk.status = Status.Submitted;
			delete updatedTalk["id"];
			this.menteeTalksFacade.dispatchMenteeTalksUpdating(this.talk.id!, updatedTalk);
			this.talk = updatedTalk;
		}
	}
}
