import { Component, OnDestroy, OnInit } from "@angular/core";
import { Lesson } from "@jsmu/core";
import { Subject, takeUntil } from "rxjs";
import { LessonsDataService } from "../../../services/lessons.data.service";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { MenteeFormService } from "../../services/forms/mentee.form.service";
import { Routes } from "../../models/routes";

@Component({
	selector: "jsmu-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit, OnDestroy {
	public isMenteeFormVisible = false;
	public lessonList!: Lesson[];
	private destroy$: Subject<void> = new Subject<void>();

	constructor(
		private lessonService: LessonsDataService,
		private router: Router,
		private menteeFormService: MenteeFormService
	) {}

	ngOnInit(): void {
		this.lessonService
			.getLesson()
			.pipe(takeUntil(this.destroy$))
			.subscribe((lessons) => {
				this.lessonList = lessons as Lesson[];
			});
	}

	public activateMenteeForm(event: boolean): void {
		this.isMenteeFormVisible = event;
	}

	public cancelMenteeForm(): void {
		this.isMenteeFormVisible = false;
	}

	public submitMenteeForm(menteeForm: FormGroup): void {
		this.menteeFormService.menteeFormSave(menteeForm);
		this.router.navigate([Routes.MENTEE_PAGE]);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
