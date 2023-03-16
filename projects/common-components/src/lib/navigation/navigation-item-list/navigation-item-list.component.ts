import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "jsmu-navigation-item-list",
	templateUrl: "./navigation-item-list.component.html",
	styleUrls: ["./navigation-item-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemListComponent {
	@Input() navigationItems!: any[];
}
