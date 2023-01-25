import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";
import { SubmitComponent } from "./buttons/submit/submit.component";

@NgModule({
	declarations: [CommonComponentsComponent, SubmitComponent, ButtonComponent],
	imports: [BrowserModule],
	exports: [CommonComponentsComponent, SubmitComponent, ButtonComponent]
})
export class CommonComponentsModule {}
