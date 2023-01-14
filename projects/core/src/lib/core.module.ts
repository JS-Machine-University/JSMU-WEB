import { NgModule } from "@angular/core"
import { StoreModule } from "@ngrx/store"
import { CoreComponent } from "./core.component"

@NgModule({
	declarations: [CoreComponent],
	imports: [
		// StoreModule.forFeature()
	],
	exports: [CoreComponent]
})
export class CoreModule {}
