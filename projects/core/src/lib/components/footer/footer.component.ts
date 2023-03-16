import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SocialClassname } from "@jsmu/core";
import { socialsClassnames } from "../../../../../../src/assets/objects/socials.objects";
import { footerItems } from "../../../../../../src/assets/objects/footer.objects";

@Component({
	selector: "jsmu-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
	public date: Date = new Date();
	public socialClassnames: SocialClassname[] = socialsClassnames;
	public footerItems = footerItems;
}
