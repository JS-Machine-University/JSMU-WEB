import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";
import { TalksListComponent } from "./talks/talks-list/talks-list.component";
import { TalkItemComponent } from "./talks/talk-item/talk-item.component";
import { TalkItemsLineComponent } from "./talks/talk-items-line/talk-items-line.component";
import { SortPipe } from "@jsmu/shared";
import { DialogComponent } from "./dialog/dialog.component";
import { ClickOutsideDirective } from "./directives/clickOutside.directive";

@NgModule({
	declarations: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent,
		DialogComponent,
		SortPipe,
		ClickOutsideDirective
	],
	imports: [BrowserModule],
	exports: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent,
		DialogComponent
	]
})
export class CommonComponentsModule {}
