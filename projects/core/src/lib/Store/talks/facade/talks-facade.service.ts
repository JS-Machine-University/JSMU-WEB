import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectTalks, loadTalks, Talk, TalksState } from "@jsmu/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class TalksFacadeService {
	talks!: Talk[];
	constructor(private store: Store) {}

	public getTalks(): Observable<Talk[]> {
		return this.store.select(selectTalks);
	}

	public dispatchTalks(): void {
		return this.store.dispatch(loadTalks());
	}
}
