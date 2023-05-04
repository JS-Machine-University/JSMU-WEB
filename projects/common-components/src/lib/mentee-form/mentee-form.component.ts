import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Lesson, TalksService } from "@jsmu/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { checkBoxValidator } from "../validators/check-box-validator";

@Component({
	selector: "jsmu-mentee-form",
	templateUrl: "./mentee-form.component.html",
	styleUrls: ["./mentee-form.component.scss"]
})
export class MenteeFormComponent implements OnInit {
	@Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();
	@Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
	@Input() lessonsList!: Lesson[];
	public menteeRegistrationForm!: FormGroup;

	constructor(private formBuilder: FormBuilder, private talksService: TalksService) {}

	ngOnInit(): void {
		this.menteeRegistrationForm = this.formBuilder.group({
			name: [null, Validators.required],
			mail: [null, [Validators.required, Validators.email]],
			rmMail: [null, [Validators.required, Validators.email]],
			modules: this.formBuilder.array(
				[false, false, false, false, false, false, false, false],
				[Validators.required, checkBoxValidator()]
			)
		});
	}

	public cancelEmit(): void {
		this.cancelEvent.emit();
	}

	get _name() {
		return this.menteeRegistrationForm.get("name");
	}

	get _mail() {
		return this.menteeRegistrationForm.get("mail");
	}

	get _rmMail() {
		return this.menteeRegistrationForm.get("rmMail");
	}

	public checkAndSubmit(): void {
		if (this.menteeRegistrationForm.valid) {
			this.submitEvent.emit(this.menteeRegistrationForm);
		}
	}
}
