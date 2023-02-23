import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { HomePageSectionsService } from "../../services/home-page-sections.service";
import { HomePageSection } from "../../models/home-page-section";

@Component({
	selector: "jsmu-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, OnDestroy {
	public sections: HomePageSection[] = [];
	private destroy$: Subject<void> = new Subject<void>();

	constructor(private homePageService: HomePageSectionsService, private ref: ChangeDetectorRef) {}

	public getSections(): void {
		this.homePageService
			.getSections<HomePageSection[]>()
			.pipe(takeUntil(this.destroy$))
			.subscribe((sections: HomePageSection[]) => {
				this.sections = sections;
				this.ref.markForCheck();
			});
	}

	ngOnInit(): void {
		this.getSections();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
