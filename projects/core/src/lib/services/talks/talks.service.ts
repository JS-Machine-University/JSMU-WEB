import { Injectable } from "@angular/core";
import { DataBaseService } from "../database.service";
import { ListType } from "../../models/list-type";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class TalksService {
	constructor(private dbService: DataBaseService<any>) {}

	getTalksFromDb<Talk>(): Observable<Talk> {
		return this.dbService.getData<Talk>(ListType.TALKS);
	}
}
