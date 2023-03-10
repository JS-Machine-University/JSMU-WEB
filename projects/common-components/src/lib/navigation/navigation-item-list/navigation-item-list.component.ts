import { ChangeDetectionStrategy, Component } from "@angular/core";
import { footerItems } from "../../../../../../src/assets/objects/footer.objects";
import { FooterItem } from "@jsmu/core";

@Component({
	selector: "jsmu-navigation-item-list",
	templateUrl: "./navigation-item-list.component.html",
	styleUrls: ["./navigation-item-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemListComponent {
	public footerItems: FooterItem[] = footerItems;
}
