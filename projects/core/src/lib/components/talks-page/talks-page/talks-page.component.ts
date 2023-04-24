import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Talk, TalksFacadeService } from "@jsmu/core";
import { Observable } from "rxjs";

@Component({
	selector: "jsmu-talks-page",
	templateUrl: "./talks-page.component.html",
	styleUrls: ["./talks-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksPageComponent implements OnInit {
	public talks$!: Observable<Talk[]>;

	constructor(private talksFacade: TalksFacadeService) {}

	ngOnInit(): void {
		this.talksFacade.dispatchTalks();
		this.getTalks();
	}

	public getTalks(): void {
		this.talks$ = this.talksFacade.getTalks();
	}
}
