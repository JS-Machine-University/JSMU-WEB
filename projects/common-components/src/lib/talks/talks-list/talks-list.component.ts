import { ChangeDetectionStrategy, Component, Input, OnChanges } from "@angular/core";
import { Talk } from "@jsmu/core";
import { SortPipe } from "@jsmu/shared";

@Component({
	selector: "jsmu-talks-list",
	templateUrl: "./talks-list.component.html",
	styleUrls: ["./talks-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksListComponent implements OnChanges {
	@Input() talks: Talk[] = [];
	public sortPipe = new SortPipe();

	ngOnChanges(): void {
		this.talks = this.sortPipe.transform(this.talks);
	}

	public isShowLine(talks: Talk[], index: number): boolean {
		return (
			new Date(talks[index]?.resultDate).toLocaleDateString() !==
			new Date(talks[index - 1]?.resultDate).toLocaleDateString()
		);
	}
}
