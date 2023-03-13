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
	selector: "[jsmuClickOutside]"
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
	@Output() clickOutside = new EventEmitter<void>();
	public documentClickSubscription!: Subscription;

	constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {}
	public ngAfterViewInit(): void {
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

	public ngOnDestroy(): void {
		this.documentClickSubscription?.unsubscribe();
	}

	private isInside(elementToCheck: HTMLElement): boolean {
		return (
			elementToCheck === this.element.nativeElement ||
			this.element.nativeElement.contains(elementToCheck)
		);
	}
}
