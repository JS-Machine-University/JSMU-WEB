import { Component, OnDestroy, OnInit } from "@angular/core";
import { Lesson } from "@jsmu/core";
import { Subject, takeUntil } from "rxjs";
import { LessonsDataService } from "../../../services/lessons.data.service";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { User } from "../../models/user";
import { Roles } from "../../models/roles";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { MenteeFormService } from "../../services/forms/mentee.form.service";

@Component({
	selector: "jsmu-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit, OnDestroy {
	private user!: User;
	public isMenteeFormVisible = false;
	public lessonList!: Lesson[];
	private destroy$: Subject<void> = new Subject<void>();

	constructor(
		private lessonService: LessonsDataService,
		private userFacade: UserStoreFacade,
		private router: Router,
		private menteeFormService: MenteeFormService
	) {}

	ngOnInit(): void {
		this.userFacade
			.getUser()
			.pipe(takeUntil(this.destroy$))
			.subscribe((sUser) => {
				this.user = sUser?.user.value!;
			});
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

	private getUser(userRole: Roles): User {
		return {
			uid: this.user?.uid,
			name: this.user?.name,
			email: this.user?.email,
			photoURL: this.user?.photoURL,
			role: userRole,
			isUserAuth: true,
			isUserPresentDB: true,
			checkBase: true
		};
	}

	public submitMenteeForm(menteeForm: FormGroup): void {
		this.menteeFormService.menteeFormSave(menteeForm);
		//this.userFacade.saveUser(this.getUser(Roles.MENTEE));
		//this.router.navigate(["home-page"]);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
