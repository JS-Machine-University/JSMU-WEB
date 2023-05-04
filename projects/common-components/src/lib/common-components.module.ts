import { NgModule } from "@angular/core";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";
import { SharedModule, SortPipe } from "@jsmu/shared";
import { NavigationComponent } from "./navigation/navigation/navigation.component";
import { NavigationItemListComponent } from "./navigation/navigation-item-list/navigation-item-list.component";
import { NavigationItemComponent } from "./navigation/navigation-item/navigation-item.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { RouterModule } from "@angular/router";
import { DialogComponent } from "./dialog/dialog.component";
import { CommonModule } from "@angular/common";
import { TalksListComponent } from "./talks/talks-list/talks-list.component";
import { TalkItemComponent } from "./talks/talk-item/talk-item.component";
import { TalkItemsLineComponent } from "./talks/talk-items-line/talk-items-line.component";
import { MenteeFormComponent } from "./mentee-form/mentee-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		CommonComponentsComponent,
		NavigationComponent,
		NavigationItemListComponent,
		NavigationItemComponent,
		AvatarComponent,
		DialogComponent,
		DialogComponent,
		MenteeFormComponent,
		ButtonComponent,
		TalksListComponent,
		TalkItemsLineComponent,
		TalkItemComponent
	],
	imports: [RouterModule, SharedModule, FormsModule, ReactiveFormsModule, CommonModule],
	exports: [
		CommonComponentsComponent,
		ButtonComponent,
		NavigationItemComponent,
		NavigationItemListComponent,
		NavigationComponent,
		AvatarComponent,
		DialogComponent,
		ButtonComponent,
		TalksListComponent,
		MenteeFormComponent,
		TalkItemComponent,
		TalkItemsLineComponent
	]
})
export class CommonComponentsModule {}
