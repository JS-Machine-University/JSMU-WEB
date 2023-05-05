import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MenteeTalksFacadeService, Talk } from "@jsmu/core";
import { map } from "rxjs/operators";
import { mergeMap, Observable } from "rxjs";
import { MenteeDataService } from "../../../services/mentee.data.service";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";

@Component({
	selector: "jsmu-mentee-talks",
	templateUrl: "./mentee-talks.component.html",
	styleUrls: ["./mentee-talks.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenteeTalksComponent implements OnInit {
	public submitPermission: boolean = true;
	public talks$!: Observable<Talk[]>;
	constructor(
		private menteeTalksFacade: MenteeTalksFacadeService,
		private menteeService: MenteeDataService,
		private userFacade: UserStoreFacade
	) {}

	ngOnInit(): void {
		this.menteeTalksFacade.dispatchMenteeTalksLoading();
		this.talksDefining();
	}

	private talksDefining(): void {
		this.talks$ = this.userFacade.getUser().pipe(
			mergeMap((user) => {
				return this.menteeService.getMenteeIdByUid(user?.user.value.uid!).pipe(
					mergeMap((menteeId) => {
						return this.menteeTalksFacade.selectMenteeTalks().pipe(
							map((data) => {
								return data.filter((talk) => {
									return talk.menteeId === menteeId;
								});
							})
						);
					})
				);
			})
		);
	}
}
