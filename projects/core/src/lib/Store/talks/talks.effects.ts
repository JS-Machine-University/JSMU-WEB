import { Injectable } from "@angular/core";
import { Talk, TalksService } from "@jsmu/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as talksActions from "./talks.actions";

@Injectable()
export class TalksEffects {
	loadPosts$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(talksActions.loadTalks),
			mergeMap(() =>
				this.talksService
					.getTalksFromDb<Talk[]>()
					.pipe(map((talks: Talk[]) => talksActions.loadTalksSuccess({ talks })))
			),
			catchError((error: string) => of(talksActions.loadTalksFailure({ error })))
		);
	});

	constructor(private actions$: Actions, private talksService: TalksService) {}
}
