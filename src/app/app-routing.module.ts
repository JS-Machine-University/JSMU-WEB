import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "../../projects/core/src/lib/authorization/components/sign-in/sign-in.component";
import { AuthGuard } from "projects/core/src/lib/authorization/guards/auth/auth.guard";
import { RoleSelectComponent } from "../../projects/core/src/lib/authorization/components/role-select/role-select.component";
import { TalksListComponent } from "@jsmu/common-components";
import { MenteePageComponent } from "projects/core/src/lib/components/mentee-page/mentee-page.component";
// route guards

const routes: Routes = [
	{ path: "", redirectTo: "/sign-in", pathMatch: "full" },
	// { path: "sign-in", component: SignInComponent },
	{ path: "role-select", component: RoleSelectComponent, canActivate: [AuthGuard] },
	{ path: "talks", component: TalksListComponent },
	{ path: "mentee-page", component: MenteePageComponent, canActivate: [AuthGuard] }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
