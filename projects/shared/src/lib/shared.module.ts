import { NgModule } from "@angular/core";
import { SharedComponent } from "./shared.component";
import { ClickOutsideDirective } from "./directives/clickOutside.directive";

@NgModule({
	declarations: [SharedComponent, ClickOutsideDirective],
	exports: [SharedComponent, ClickOutsideDirective]
})
export class SharedModule {}
