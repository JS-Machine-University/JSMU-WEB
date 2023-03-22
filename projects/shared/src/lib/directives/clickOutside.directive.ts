import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from "@angular/core";
import { fromEvent, take } from "rxjs";

@Directive({
	selector: "[jsmuClickOutside]"
})
export class ClickOutsideDirective implements OnInit {
	@Output() clickOutside = new EventEmitter();

	captured = false;

	constructor(private elRef: ElementRef) {}

	@HostListener("document:click", ["$event.target"])
	onClick(target: any) {
		if (!this.captured) {
			return;
		}

		if (!this.elRef.nativeElement.contains(target)) {
			this.clickOutside.emit();
		}
	}

	ngOnInit() {
		fromEvent(document, "click", { capture: true })
			.pipe(take(1))
			.subscribe(() => (this.captured = true));
	}
}
