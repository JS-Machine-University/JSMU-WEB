import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SocialClassname } from "@jsmu/core";
import { socialsClassnames } from "src/assets/objects/socials.objects";

@Component({
	selector: "jsmu-navigation-icon-item-list",
	templateUrl: "./navigation-icon-item-list.component.html",
	styleUrls: ["./navigation-icon-item-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationIconItemListComponent {
	public socialsClassnames: SocialClassname[] = socialsClassnames;
}
