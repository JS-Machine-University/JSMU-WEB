import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "../../projects/core/src/lib/authorization/components/sign-in/sign-in.component";
import { AuthGuard } from "projects/core/src/lib/authorization/guards/auth/auth.guard";
import { RoleSelectComponent } from "../../projects/core/src/lib/authorization/components/role-select/role-select.component";
import { MenteePageComponent } from "projects/core/src/lib/components/mentee-page/mentee-page.component";
import { HomePageComponent } from "projects/core/src/lib/components/home-page/home-page.component";
import { RootComponent } from "../../projects/core/src/lib/authorization/components/root/root.component";
import { RegisterComponent } from "../../projects/core/src/lib/authorization/components/register/register.component";
import { TalksListComponent } from "@jsmu/common-components";
// route guards

const routes: Routes = [
	{ path: "home-page", component: HomePageComponent },
	{ path: "role-select", component: RoleSelectComponent },
	{ path: "talks", component: TalksListComponent },
	{ path: "mentee-page", component: MenteePageComponent },
	{ path: "registration", component: RegisterComponent },
	{
		path: "talks-page",
		loadChildren: () =>
			import("../../projects/core/src/lib/components/talks-page/talks-page.module").then(
				(m) => m.TalksPageModule
			)
	}
];

const appRoutes: Routes = [
	{ path: "", component: RootComponent, canActivate: [AuthGuard] },
	{ path: "", component: RootComponent, children: routes, canActivate: [AuthGuard] },
	{ path: "sign-in", component: SignInComponent }
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
