import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "../../projects/core/src/lib/authorization/components/sign-in/sign-in.component";
import { AuthGuard } from "projects/core/src/lib/authorization/guards/auth/auth.guard";
import { RoleSelectComponent } from "../../projects/core/src/lib/authorization/components/role-select/role-select.component";
import { TalksListComponent } from "@jsmu/common-components";
import { MenteePageComponent } from "projects/core/src/lib/components/mentee-page/mentee-page.component";
import { HomePageComponent } from "projects/core/src/lib/components/home-page/home-page.component";
import { ExpertPageComponent } from "projects/core/src/lib/components/expert-page/expert-page.component";
// route guards

const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "home", component: HomePageComponent },
	{ path: "sign-in", component: SignInComponent },
	{ path: "role-select", component: RoleSelectComponent, canActivate: [AuthGuard] },
	{ path: "talks", component: TalksListComponent },
	{ path: "mentee", component: MenteePageComponent, canActivate: [AuthGuard] },
	{
		path: "expert",
		children: [
			{
				path: "",
				component: ExpertPageComponent
			},
			{
				path: "talks",
				component: TalksListComponent
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
