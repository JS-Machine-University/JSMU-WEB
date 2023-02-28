import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HomePageSection } from "../../models/home-page-section";
import sections from "../../../../../../src/assets/jsons/sections.json";
@Component({
	selector: "jsmu-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
	public sections: HomePageSection[] = sections;
}
