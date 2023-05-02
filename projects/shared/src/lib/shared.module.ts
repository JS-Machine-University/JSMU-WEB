import { NgModule } from "@angular/core";
import { SharedComponent } from "./shared.component";
import { ClickOutsideDirective } from "./directives/clickOutside.directive";
import { SortPipe } from "./pipes/sort/sort.pipe";
import { IterableNullCheckPipe } from "./pipes/not-null/iterable.null.check";

@NgModule({
	declarations: [SharedComponent, ClickOutsideDirective, SortPipe, IterableNullCheckPipe],
	exports: [SharedComponent, ClickOutsideDirective, SortPipe, IterableNullCheckPipe]
})
export class SharedModule {}
