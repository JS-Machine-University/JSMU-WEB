import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FooterItem } from "@jsmu/core";

@Component({
	selector: "jsmu-navigation-item",
	templateUrl: "./navigation-item.component.html",
	styleUrls: ["./navigation-item.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent {
	@Input() footerItem!: FooterItem;
}
