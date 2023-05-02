import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListType } from "../models/list-type";
import { DataBaseService } from "./database.service";
import { Mentee } from "../models/mentee";

@Injectable()
export class MenteeDataService {
	constructor(private db: DataBaseService<Mentee>) {}

	public getMentees(): Observable<Mentee[]> {
		return this.db.getData<Mentee[]>(ListType.MENTEES);
	}

	public saveMentee(newData: Mentee): Observable<Mentee> {
		console.log("saveMentee");
		return this.db.saveData<Mentee>(ListType.MENTEES, newData);
	}
}
