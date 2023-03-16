import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "jsmu-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
	@Input() navigationItems!: any[];
}
