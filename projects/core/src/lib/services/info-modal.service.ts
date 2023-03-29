import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class InfoModalService {
	public visibilityProperty$: Subject<boolean> = new Subject<boolean>();

	public setVisibleValue(isModalOpen: boolean): void {
		this.visibilityProperty$.next(isModalOpen);
	}
}
