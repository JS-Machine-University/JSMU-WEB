import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";
import { TalksListComponent } from "./talks/talks-list/talks-list.component";
import { TalkItemComponent } from "./talks/talk-item/talk-item.component";
import { TalkItemsLineComponent } from "./talks/talk-items-line/talk-items-line.component";
import { SortPipe } from "@jsmu/shared";
import { NavigationComponent } from "./navigation/navigation/navigation.component";
import { NavigationItemListComponent } from "./navigation/navigation-item-list/navigation-item-list.component";
import { NavigationItemComponent } from "./navigation/navigation-item/navigation-item.component";
import { NavigationIconItemComponent } from "./navigation/navigation-icon-item/navigation-icon-item.component";
import { NavigationIconItemListComponent } from "./navigation/navigation-icon-item-list/navigation-icon-item-list.component";
import { AvatarComponent } from "./avatar/avatar.component";

@NgModule({
	declarations: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent,
		SortPipe,
		NavigationComponent,
		NavigationItemListComponent,
		NavigationItemComponent,
		NavigationIconItemComponent,
		NavigationIconItemListComponent,
		AvatarComponent
	],
	imports: [BrowserModule],
	exports: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent,
		NavigationItemComponent,
		NavigationItemListComponent,
		NavigationIconItemComponent,
		NavigationIconItemListComponent,
		NavigationComponent,
		AvatarComponent
	]
})
export class CommonComponentsModule {}
