import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Mentee } from "../../../models/mentee";
import { MenteeDataService } from "../../../services/mentee.data.service";
import { Talk, TalksService } from "@jsmu/core";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { UserState } from "../../../Store/users/models/userState";
import { Roles } from "../../models/roles";
import { User } from "../../models/user";

@Injectable({
	providedIn: "root"
})
export class MenteeFormService {
	public user!: UserState | null;

	constructor(
		private menteeService: MenteeDataService,
		private userFacade: UserStoreFacade,
		private talksService: TalksService
	) {
		this.userFacade.getUser().subscribe((sUser) => {
			this.user = sUser;
		});
	}

	public menteeFormSave(menteeForm: FormGroup): void {
		const tempArray: boolean[] = menteeForm.get("modules")?.value;
		let index = 1;
		this.menteeService.saveMentee(this.menteeBuilder(menteeForm)).subscribe((mentee) => {
			tempArray.forEach((state) => {
				if (state) {
					this.talksService.saveTalk(this.talkBuilder(index, mentee.name)).subscribe();
				}
				index++;
			});
		});
		this.userFacade.saveUser(this.userBuilder());
	}

	private menteeBuilder(menteeForm: FormGroup): Mentee {
		return {
			name: menteeForm.get("name")?.value,
			email: menteeForm.get("mail")?.value,
			rmMail: menteeForm.get("rmMail")?.value,
			uid: this.user?.user.value.uid
		};
	}

	private talkBuilder(lessonId: number, menteeId: string | null | undefined): Talk {
		return {
			menteeId: menteeId,
			experts: "null",
			conductedExpert: "null",
			lessonId: lessonId,
			result: "null",
			resultDate: "null",
			status: "null",
			takeDate: "null",
			requestDate: "null"
		};
	}

	private userBuilder(): User {
		return {
			uid: this.user?.user.value.uid,
			name: this.user?.user.value.name,
			email: this.user?.user.value.email,
			photoURL: this.user?.user.value.photoURL,
			role: Roles.MENTEE,
			isUserAuth: true,
			isUserPresentDB: true,
			checkBase: true
		};
	}
}
