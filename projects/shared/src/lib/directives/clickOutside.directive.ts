import { DOCUMENT } from "@angular/common";
import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	Inject,
	OnDestroy,
	Output
} from "@angular/core";
import { filter, fromEvent, skip, Subscription } from "rxjs";

@Directive({
	selector: "[clickOutside]"
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
	@Output() clickOutside = new EventEmitter<void>();
	public documentClickSubscription!: Subscription;

	constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {}
	ngAfterViewInit(): void {
		this.documentClickSubscription = fromEvent(this.document, "click")
			.pipe(
				filter((event) => {
					return !this.isInside(event.target as HTMLElement);
				}),
				skip(1)
			)
			.subscribe(() => {
				this.clickOutside.emit();
			});
	}

	ngOnDestroy(): void {
		this.documentClickSubscription?.unsubscribe();
	}

	isInside(elementToCheck: HTMLElement): boolean {
		return (
			elementToCheck === this.element.nativeElement ||
			this.element.nativeElement.contains(elementToCheck)
		);
	}
}
