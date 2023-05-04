import { NgModule } from "@angular/core";
import { CommonComponentsModule } from "@jsmu/common-components";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { AuthorizationModule } from "../../authorization.module";
import { CommonModule } from "@angular/common";

export const routes: Routes = [
	{
		path: "",
		component: RegisterComponent
	}
];

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		CommonModule,
		CommonComponentsModule,
		AuthorizationModule,
		CommonComponentsModule,
		RouterModule.forChild(routes)
	],
	exports: [RegisterComponent]
})
export class RegisterModule {}
