import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Lesson } from "@jsmu/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "jsmu-mentee-form",
	templateUrl: "./mentee-form.component.html",
	styleUrls: ["./mentee-form.component.scss"]
})
export class MenteeFormComponent {
	@Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();
	@Output() submitEvent: EventEmitter<void> = new EventEmitter<void>();
	@Input() lessonsList!: Lesson[];
	public menteeRegistrationForm: FormGroup = this.formBuilder.group({
		name: [null, Validators.required],
		mail: [null, [Validators.required, Validators.email]],
		rmMail: [null, [Validators.required, Validators.email]],
		modules: this.formBuilder.array([false, false, false, false, false, false, false, false])
	});

	constructor(private formBuilder: FormBuilder) {}

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
		if (this.menteeRegistrationForm.valid && this.checkBoxValidator()) {
			//toDo Save Data to DataBase
		}
		this.submitEvent.emit();
	}

	private checkBoxValidator(): boolean {
		let minChecked: number = 5;
		let countChecked: number = 0;
		let tempArr: boolean[] = this.menteeRegistrationForm.get("modules")?.value;

		tempArr.forEach((state) => {
			if (state) {
				countChecked++;
			}
		});

		const isValid = countChecked >= minChecked;

		return isValid;
	}
}
