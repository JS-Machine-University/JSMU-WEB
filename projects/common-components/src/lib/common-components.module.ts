import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";
import { TalksListComponent } from "./talks/talks-list/talks-list.component";
import { TalkItemComponent } from "./talks/talk-item/talk-item.component";
import { TalkItemsLineComponent } from "./talks/talk-items-line/talk-items-line.component";
import { SortPipe } from "@jsmu/shared";

@NgModule({
	declarations: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent,
		SortPipe
	],
	imports: [BrowserModule],
	exports: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent
	]
})
export class CommonComponentsModule {}
