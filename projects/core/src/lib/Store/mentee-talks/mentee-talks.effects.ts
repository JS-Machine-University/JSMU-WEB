import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as menteeTalksActions from "./mentee-talks.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Talk, TalksService } from "@jsmu/core";

@Injectable()
export class MenteeTalksEffects {
	loadMenteeTalks$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(menteeTalksActions.loadMenteeTalks),
			exhaustMap(() => {
				return this.talksService.getTalksFromDb<Talk[]>().pipe(
					map((talks: Talk[]) => {
						return menteeTalksActions.loadMenteeTalksSuccess({ talks });
					})
				);
			}),
			catchError((error: string) => of(menteeTalksActions.loadMenteeTalksFailure({ error })))
		);
	});

	updateMenteeTalks$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(menteeTalksActions.updateMenteeTalks),
			exhaustMap((actions) => {
				return this.talksService.updateTalks(actions.talkId, actions.updatedTalk).pipe(
					map((talk: Talk) => {
						return menteeTalksActions.updateMenteeTalksSuccess({ updatedTalk: talk });
					})
				);
			}),
			catchError((error: string) =>
				of(menteeTalksActions.updateMenteeTalksFailure({ error }))
			)
		);
	});

	constructor(private actions$: Actions, private talksService: TalksService) {}
}
