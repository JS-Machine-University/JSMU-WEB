import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpertComponent } from "./expert.component";
import { CommonComponentsComponent, TalksListComponent } from "@jsmu/common-components";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		component: ExpertComponent,

		children: [{ path: "talks", component: TalksListComponent }]
	}
];

@NgModule({
	declarations: [ExpertComponent],
	imports: [CommonModule,CommonComponentsComponent,ExpertModule,RouterModule.forChild(routes)],
  exports:[ExpertComponent]
})
export class ExpertModule {}
