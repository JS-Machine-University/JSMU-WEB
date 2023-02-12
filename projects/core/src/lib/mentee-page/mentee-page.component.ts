import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { Lesson } from "../models/lesson";
import { LessonsDataService } from "../services/lessons.data.service";

@Component({
	selector: "jsmu-mentee-page",
	templateUrl: "./mentee-page.component.html",
	styleUrls: ["./mentee-page.component.scss"]
})
export class MenteePageComponent implements OnInit, OnDestroy {
	public lessons: Lesson[] = [];
	private destroy$: Subject<void> = new Subject<void>();

	constructor(private ldb: LessonsDataService) {}

	public saveLesson<Lesson>(lesson: Lesson): Observable<Lesson> {
		return this.ldb.saveLesson(lesson);
	}
	public getLessons(): void {
		this.ldb
			.getLesson<Lesson[]>()
			.pipe(takeUntil(this.destroy$))
			.subscribe((lessons: Lesson[]) => {
				this.lessons = lessons;
			});
	}

	ngOnInit(): void {
		this.getLessons();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
