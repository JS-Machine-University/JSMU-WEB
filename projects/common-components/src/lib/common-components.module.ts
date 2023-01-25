import { NgModule } from "@angular/core";
import { CommonComponentsComponent } from "./common-components.component";
import { SubmitComponent } from "./buttons/submit/submit.component";

@NgModule({
	declarations: [CommonComponentsComponent, SubmitComponent],
	imports: [],
	exports: [CommonComponentsComponent, SubmitComponent]
})
export class CommonComponentsModule {}
