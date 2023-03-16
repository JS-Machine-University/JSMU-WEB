import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "jsmu-navigation-item",
	templateUrl: "./navigation-item.component.html",
	styleUrls: ["./navigation-item.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent {
	@Input() itemObj!: any;
}
