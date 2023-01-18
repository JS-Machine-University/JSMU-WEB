import { Injectable } from "@angular/core";
import { DataBaseService, Lesson } from "./database.service";

@Injectable()
export class LessonsDataService extends DataBaseService<Lesson> {
    
}