import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";
import { TalksListComponent } from "./talks/talks-list/talks-list.component";
import { TalkItemComponent } from "./talks/talk-item/talk-item.component";
import { TalkItemsLineComponent } from "./talks/talk-items-line/talk-items-line.component";
import { SortPipe } from "@jsmu/shared";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
	declarations: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent,
		DialogComponent,
		SortPipe
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
