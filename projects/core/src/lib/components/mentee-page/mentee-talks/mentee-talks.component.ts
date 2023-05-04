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
	public submitPermission: boolean = true;
	public talks$!: Observable<Talk[]>;
	public menteeId: number = 14; //Hardcore menteeId
	constructor(private menteeTalksFacade: MenteeTalksFacadeService) {}

	ngOnInit(): void {
		this.menteeTalksFacade.dispatchMenteeTalksLoading();
		this.talksDefining();
	}

	private talksDefining(): void {
		this.talks$ = this.menteeTalksFacade.selectMenteeTalks().pipe(
			map((data: Talk[]) => {
				return data.filter((talk: Talk) => {
					return talk.menteeId === this.menteeId;
				});
			})
		);
	}
}
