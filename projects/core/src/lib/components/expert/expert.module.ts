import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpertComponent } from "./expert.component";
import { TalksListComponent } from "@jsmu/common-components";
import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		component: ExpertComponent,

		children: [{ path: "talks", component: TalksListComponent }]
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule]
})
export class ExpertModule {}
