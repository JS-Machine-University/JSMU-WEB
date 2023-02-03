import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataBaseService, ListType } from "./database.service";
import { Lesson } from "../lib/models/lesson";

@Injectable()
export class LessonsDataService extends DataBaseService<Lesson> {
	public getLesson<Lesson>(): Observable<Lesson> {
		return this.getData<Lesson>(ListType.LESSONS);
	}

	public saveLesson<Lesson>(newData: Lesson): Observable<Lesson> {
		return this.saveData<Lesson>(ListType.LESSONS, newData);
	}
}
