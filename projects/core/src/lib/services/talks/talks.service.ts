import { Injectable } from "@angular/core";
import { DataBaseService } from "../database.service";
import { ListType } from "../../models/list-type";
import { Observable } from "rxjs";
import { Talk } from "../../models/talk";

@Injectable({
	providedIn: "root"
})
export class TalksService {
	constructor(private dbService: DataBaseService<Talk>) {}

	getTalksFromDb<Talk>(): Observable<Talk> {
		return this.dbService.getData<Talk>(ListType.TALKS);
	}

	public saveTalk(newData: Talk): Observable<Talk> {
		return this.dbService.saveData<Talk>(ListType.TALKS, newData);
	}
}
