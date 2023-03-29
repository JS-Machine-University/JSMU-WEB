import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class InfoModalService {
	public serviceSubjectProperty$: Subject<boolean> = new Subject<boolean>();

	public callNextOnSubject(isModalOpen: boolean): void {
		this.serviceSubjectProperty$.next(isModalOpen);
	}
}
