import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "../../projects/core/src/lib/authorization/components/sign-in/sign-in.component";
import { AuthGuard } from "projects/core/src/lib/authorization/guards/auth/auth.guard";
import { MenteePageComponent } from "projects/core/src/lib/components/mentee-page/mentee-page.component";
import { HomePageComponent } from "projects/core/src/lib/components/home-page/home-page.component";
import { RootComponent } from "../../projects/core/src/lib/components/root/root.component";
// route guards

const routes: Routes = [
	{ path: "home-page", component: HomePageComponent },
	{ path: "mentee-page", component: MenteePageComponent },
	{
		path: "registration",
		loadChildren: () =>
			import(
				"../../projects/core/src/lib/authorization/components/register/register.module"
			).then((m) => m.RegisterModule)
	},
	{
		path: "talks-page",
		loadChildren: () =>
			import("../../projects/core/src/lib/components/talks-page/talks-page.module").then(
				(m) => m.TalksPageModule
			)
	}
];

const appRoutes: Routes = [
	{ path: "", component: RootComponent, children: routes, canActivate: [AuthGuard] },
	{ path: "sign-in", component: SignInComponent }
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
