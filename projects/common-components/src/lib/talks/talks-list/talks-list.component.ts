import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Talk } from "@jsmu/core";

@Component({
	selector: "jsmu-talks-list",
	templateUrl: "./talks-list.component.html",
	styleUrls: ["./talks-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksListComponent {
	@Input() talks: Talk[] = [];

	public isShowLine(talks: Talk[], index: number): boolean {
		return (
			new Date(talks[index]?.resultDate).toLocaleDateString() !==
			new Date(talks[index - 1]?.resultDate).toLocaleDateString()
		);
	}
}
