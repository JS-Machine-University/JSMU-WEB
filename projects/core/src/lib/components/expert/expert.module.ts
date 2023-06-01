import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpertComponent } from "./expert.component";
import { CommonComponentsComponent, CommonComponentsModule, TalksListComponent } from "@jsmu/common-components";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "../../core.module";



export const routes: Routes = [
	{
		path: "",
		component: ExpertComponent,

		children: [{ path: "talks", component: TalksListComponent }]
	}
];

@NgModule({
	declarations: [ExpertComponent],
	imports: [CommonModule,CoreModule, CommonComponentsModule, RouterModule.forChild(routes)],
  exports:[ExpertComponent]
})
export class ExpertModule {}
