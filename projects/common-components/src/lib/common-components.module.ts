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
import { AvatarComponent } from "./avatar/avatar.component";
import { RouterModule } from "@angular/router";
import { DialogComponent } from "./dialog/dialog.component";
import { ClickOutsideDirective } from "../../../shared/src/lib/directives/clickOutside.directive";

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
		AvatarComponent,
		DialogComponent,
		ClickOutsideDirective
	],
	imports: [BrowserModule, RouterModule],
	exports: [
		CommonComponentsComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemComponent,
		TalkItemsLineComponent,
		NavigationItemComponent,
		NavigationItemListComponent,
		NavigationComponent,
		AvatarComponent,
		DialogComponent
	]
})
export class CommonComponentsModule {}
