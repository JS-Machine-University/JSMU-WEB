import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SocialClassname } from "@jsmu/core";

@Component({
	selector: "jsmu-navigation-icon-item",
	templateUrl: "./navigation-icon-item.component.html",
	styleUrls: ["./navigation-icon-item.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationIconItemComponent {
	@Input() socialClassname!: SocialClassname;
}
