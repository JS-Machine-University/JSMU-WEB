import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Mentee } from "../../../models/mentee";
import { MenteeDataService } from "../../../services/mentee.data.service";

@Injectable({
	providedIn: "root"
})
export class MenteeFormService {
	constructor(private menteeService: MenteeDataService) {}

	public menteeFormSave(menteeForm: FormGroup): void {
		this.menteeService.saveMentee(this.menteeBuilder(menteeForm));
	}

	private menteeBuilder(menteeForm: FormGroup): Mentee {
		return {
			name: menteeForm.get("name")?.value,
			email: menteeForm.get("mail")?.value,
			rmMail: menteeForm.get("rmMail")?.value
		};
	}
}
