import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataBaseService } from "./database.service";
import { Lesson } from "../models/lesson";
import { ListType } from "../models/list-type";

@Injectable()
export class LessonsDataService extends DataBaseService<Lesson> {
	public getLesson<Lesson>(): Observable<Lesson> {
		return this.getData<Lesson>(ListType.LESSONS);
	}

	public saveLesson<Lesson>(newData: Lesson): Observable<Lesson> {
		return this.saveData<Lesson>(ListType.LESSONS, newData);
	}
}
