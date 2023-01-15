import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "@jsmu/shared";
import { CoreModule } from "@jsmu/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonComponentsModule } from "@jsmu/common-components";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule, CommonComponentsModule, CoreModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
