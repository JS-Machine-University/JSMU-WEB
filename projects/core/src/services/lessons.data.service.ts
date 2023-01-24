import { Injectable } from "@angular/core";
import { DataBaseService } from "./database.service";

export interface Lesson {
	name: string;
	description: string;
}

@Injectable()
export class LessonsDataService extends DataBaseService<Lesson> {}
