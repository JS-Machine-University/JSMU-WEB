import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NavigationItem } from "@jsmu/core";

@Component({
	selector: "jsmu-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
	@Input() navigationItems!: NavigationItem[];
}
