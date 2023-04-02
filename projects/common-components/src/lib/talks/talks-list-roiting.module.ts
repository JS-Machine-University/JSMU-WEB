import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TalksListComponent } from "./talks-list/talks-list.component";

const routes: Routes = [
	{
		path: "talks",
		component: TalksListComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TalksListRoutingModule {}
