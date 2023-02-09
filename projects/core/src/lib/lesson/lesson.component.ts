import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Lesson } from "../models/lesson";

@Component({
	selector: "jsmu-lesson",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./lesson.component.html",
	styleUrls: ["./lesson.component.scss"]
})
export class LessonComponent {
	public selected: boolean = false;

	@Input()
	public lesson!: Lesson;

	public select(): void {
		this.selected = !this.selected;
	}
}
