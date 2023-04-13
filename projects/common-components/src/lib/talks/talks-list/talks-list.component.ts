import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
} from "@angular/core";
import { Talk, TalksFacadeService } from "@jsmu/core";
import { Subscription } from "rxjs";

@Component({
	selector: "jsmu-talks-list",
	templateUrl: "./talks-list.component.html",
	styleUrls: ["./talks-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksListComponent implements OnInit, OnDestroy {
	public talks: Talk[] = [];
	getTalksSubscription!: Subscription;

	constructor(private talksFacade: TalksFacadeService, private cd: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.talksFacade.dispatchTalks();
		this.getTalks();
	}

	public getTalks(): void {
		this.getTalksSubscription = this.talksFacade.getTalks().subscribe((talks) => {
			this.talks = talks;
			this.cd.markForCheck();
		});
	}

	public isShowLine(talks: Talk[], index: number): boolean {
		return (
			new Date(talks[index]?.submitDate).toLocaleDateString() !==
			new Date(talks[index - 1]?.submitDate).toLocaleDateString()
		);
	}

	ngOnDestroy(): void {
		if (this.getTalksSubscription) {
			this.getTalksSubscription.unsubscribe();
		}
	}
}
