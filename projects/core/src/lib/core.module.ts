import { AuthorizationModule } from "./authorization/authorization.module";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CoreComponent } from "./core.component";
import { CommonModule } from "@angular/common";
import { CommonComponentsModule } from "@jsmu/common-components";

@NgModule({
	declarations: [CoreComponent],
	imports: [
		CommonModule,
		CommonComponentsModule,
		AuthorizationModule
		// StoreModule.forFeature()
	]
})
export class CoreModule {}
