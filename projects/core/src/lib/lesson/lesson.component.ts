import { Component, Input } from "@angular/core";
import { Lesson } from "../models/lesson";

@Component({
	selector: "jsmu-lesson",
	templateUrl: "./lesson.component.html",
	styleUrls: ["./lesson.component.scss"]
})
export class LessonComponent {
	public selected: boolean = false;

	@Input()
	public lesson: Lesson | undefined;

	public select(lesson: Lesson): void {
		this.selected = !this.selected;
	}
}
