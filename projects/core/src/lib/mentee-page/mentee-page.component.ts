import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Lesson } from "../models/lesson";
import { LessonsDataService } from "../../services/lessons.data.service";

@Component({
	selector: "jsmu-mentee-page",
	templateUrl: "./mentee-page.component.html",
	styleUrls: ["./mentee-page.component.scss"]
})
export class MenteePageComponent implements OnInit {
	public lessons: Lesson[] = [];

	constructor(private ldb: LessonsDataService) {}

	public saveLesson(lesson: Lesson): Observable<Lesson> {
		return this.ldb.saveLesson(lesson);
	}
	public getLessons(): void {
		this.ldb.getLesson().subscribe((lessons: any) => {
			lessons.map((lesson: Lesson) => {
				if (lesson !== null) {
					this.lessons.push(lesson);
				}
			});
		});
	}

	ngOnInit(): void {
		this.getLessons();
	}
}
