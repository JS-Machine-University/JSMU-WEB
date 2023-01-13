import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { SharedModule } from "@jsmu/shared"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { CommonComponentsModule } from "common-components"
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { environment } from "../environments/environment"

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		CommonComponentsModule,
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
