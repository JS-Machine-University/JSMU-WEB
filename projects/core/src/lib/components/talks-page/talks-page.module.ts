import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TalksPageComponent } from "./talks-page/talks-page.component";
import { CommonComponentsModule } from "@jsmu/common-components";
import { RouterModule, Routes } from "@angular/router";
import { TalksModule } from "../../Store/talks/talks.module";

export const routes: Routes = [
	{
		path: "",
		component: TalksPageComponent
	}
];

@NgModule({
	declarations: [TalksPageComponent],
	imports: [CommonModule, CommonComponentsModule, TalksModule, RouterModule.forChild(routes)],
	exports: [TalksPageComponent]
})
export class TalksPageModule {}
