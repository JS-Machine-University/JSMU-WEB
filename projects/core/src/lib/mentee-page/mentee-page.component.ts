import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Lesson } from "../models/lesson";
import { LessonsDataService } from "../services/lessons.data.service";

@Component({
	selector: "jsmu-mentee-page",
	templateUrl: "./mentee-page.component.html",
	styleUrls: ["./mentee-page.component.scss"]
})
export class MenteePageComponent implements OnInit {
	public lessons: Lesson[] = [];

	constructor(private ldb: LessonsDataService) {}

	public saveLesson<Lesson>(lesson: Lesson): Observable<Lesson> {
		return this.ldb.saveLesson(lesson);
	}
	public getLessons(): void {
		this.ldb.getLesson<Lesson[]>().subscribe((lessons: Lesson[]) => {
			this.lessons = lessons;
		});
	}

	ngOnInit(): void {
		this.getLessons();
	}
}
