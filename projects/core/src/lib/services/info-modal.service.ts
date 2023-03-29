import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class InfoModalService {
	public isModalOpen: Subject<boolean> = new Subject<boolean>();

	public subjectEmitter(data: boolean): void {
		this.isModalOpen.next(data);
	}
}
