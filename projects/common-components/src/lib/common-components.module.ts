import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
	declarations: [CommonComponentsComponent, ButtonComponent],
	imports: [BrowserModule],
	exports: [CommonComponentsComponent, ButtonComponent]
})
export class CommonComponentsModule {}
