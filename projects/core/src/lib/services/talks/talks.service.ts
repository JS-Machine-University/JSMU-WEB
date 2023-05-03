import { Injectable } from "@angular/core";
import { DataBaseService } from "../database.service";
import { ListType } from "../../models/list-type";
import { Observable } from "rxjs";
import { Talk } from "../../models/talk";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class TalksService {
	constructor(private dbService: DataBaseService<Talk>) {}

	getTalksFromDb<Talk>(): Observable<Talk[]> {
		return this.dbService.getData<Talk[]>(ListType.TALKS).pipe(
			map((talks) => {
				let talksArray: Talk[] = [];
				for (let key in talks) {
					talksArray.push({ ...talks[key], id: key });
				}
				return talksArray;
			})
		);
	}

	updateTalks<Talk>(id: string, updatedTalk: Talk): Observable<Talk> {
		return this.dbService.updateData<Talk>(ListType.TALKS, id, updatedTalk);
	}
}
