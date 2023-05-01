import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MenteeTalksFacadeService, Talk } from "@jsmu/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
	selector: "jsmu-mentee-talks",
	templateUrl: "./mentee-talks.component.html",
	styleUrls: ["./mentee-talks.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenteeTalksComponent implements OnInit {
	public ownTalks$!: Observable<Talk[]>;
	constructor(private menteeTalksFacade: MenteeTalksFacadeService) {}

	ngOnInit(): void {
		this.menteeTalksFacade.dispatchMenteeTalksLoading();
		this.talksDefining();
	}

	private talksDefining(): void {
		this.ownTalks$ = this.menteeTalksFacade.selectMenteeTalks().pipe(
			map((data: Talk[]) => {
				return data.filter((talk: Talk) => {
					return talk.menteeId === JSON.parse(localStorage.getItem("user")!).uid;
				});
			})
		);
	}
}
