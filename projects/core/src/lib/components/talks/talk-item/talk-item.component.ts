import { Talk } from "../../../models/talk";
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
	selector: "jsmu-talk-item",
	templateUrl: "./talk-item.component.html",
	styleUrls: ["./talk-item.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkItemComponent {
	@Input() public talks!: Talk[];
	public profilePath: string =
		"https://www.purina.co.uk/sites/default/files/2020-12/Why-Do-Cats-Have-WhiskersHERO.jpg";

	public writeLine(i: number): boolean {
		return (
			this.talks[i]?.resultDate?.toLocaleDateString() !==
			this.talks[i - 1]?.resultDate?.toLocaleDateString()
		);
	}
}
