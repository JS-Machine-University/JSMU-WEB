import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataBaseService } from "./database.service";
import { Lesson } from "../models/lesson";
import { ListType } from "../models/list-type";

@Injectable()
export class LessonsDataService {
	constructor(private db: DataBaseService<Lesson>) {}

	public getLesson<Lesson>(): Observable<Lesson> {
		return this.db.getData<Lesson>(ListType.LESSONS);
	}

	public saveLesson<Lesson>(newData: Lesson): Observable<Lesson> {
		return this.db.saveData<Lesson>(ListType.LESSONS, newData);
	}
}
