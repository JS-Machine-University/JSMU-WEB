import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "@jsmu/core";
import { MenteeTalksComponent } from "./mentee-talks/mentee-talks.component";
import { MenteePageComponent } from "./mentee-page/mentee-page.component";
import { MenteeLessonsComponent } from "./mentee-lessons/mentee-page.component";
import { CommonComponentsModule } from "@jsmu/common-components";
import { MenteeTalksModule } from "../../Store/mentee-talks/mentee-talks.module";

const routes: Routes = [
	{
		path: "",
		component: MenteePageComponent,
		children: [
			{
				path: "",
				redirectTo: "talks",
				pathMatch: "full"
			},
			{
				path: "talks",
				component: MenteeTalksComponent
			},
			{
				path: "lessons",
				component: MenteeLessonsComponent
			}
		]
	}
];

@NgModule({
	declarations: [MenteePageComponent, MenteeTalksComponent, MenteeLessonsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CoreModule,
		CommonComponentsModule,
		MenteeTalksModule
	],
	exports: []
})
export class MenteePageModule {}
