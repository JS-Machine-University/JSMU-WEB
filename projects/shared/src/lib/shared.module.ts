import { NgModule } from "@angular/core";
import { SharedComponent } from "./shared.component";
import { ClickOutsideDirective } from "./directives/clickOutside.directive";
import { SortPipe } from "./pipes/sort/sort.pipe";

@NgModule({
	declarations: [SharedComponent, ClickOutsideDirective, SortPipe],
	exports: [SharedComponent, ClickOutsideDirective, SortPipe]
})
export class SharedModule {}
