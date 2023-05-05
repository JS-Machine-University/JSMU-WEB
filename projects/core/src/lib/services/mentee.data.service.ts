import { Injectable } from "@angular/core";
import { mergeMap, Observable, of } from "rxjs";
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
		return this.db.saveData<Mentee>(ListType.MENTEES, newData);
	}

	public getMenteeIdByUid(uid: string): Observable<string> {
		const MENTEE_ID: number = 0;
		const MENTEE_DATA: number = 1;
		return this.getMentees().pipe(
			mergeMap((mentees) => {
				let tempMentee: string;
				Object.entries(mentees).forEach((mentee) => {
					if ((mentee[MENTEE_DATA] as Mentee).uid === uid) {
						tempMentee = mentee[MENTEE_ID] as string;
					}
				});
				return of(tempMentee!);
			})
		);
	}
}
