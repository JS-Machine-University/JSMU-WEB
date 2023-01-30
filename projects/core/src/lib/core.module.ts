import { NgModule } from "@angular/core";
import { CoreComponent } from "./core.component";
import { AuthorizationModule } from "./authorization/authorization.module";

@NgModule({
	declarations: [CoreComponent],
	imports: [AuthorizationModule],
	exports: [CoreComponent]
})
export class CoreModule {}
