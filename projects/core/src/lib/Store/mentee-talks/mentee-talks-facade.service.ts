import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadMenteeTalks, updateMenteeTalks } from "./mentee-talks.actions";
import { selectMenteeTalks } from "./mentee-talks.selectors";
import { Talk } from "@jsmu/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class MenteeTalksFacadeService {
	constructor(private store: Store) {}

	public dispatchMenteeTalksLoading(): void {
		return this.store.dispatch(loadMenteeTalks());
	}

	public selectMenteeTalks(): Observable<Talk[]> {
		return this.store.select(selectMenteeTalks);
	}

	public dispatchMenteeTalksUpdating(id: number, talk: Talk): void {
		return this.store.dispatch(updateMenteeTalks({ talkId: id, updatedTalk: talk }));
	}
}
