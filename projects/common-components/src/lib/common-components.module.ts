import { NgModule } from "@angular/core";
import { CommonComponentsComponent } from "./common-components.component";
import { ButtonComponent } from "./button/button.component";
import { SharedModule } from "@jsmu/shared";
import { NavigationComponent } from "./navigation/navigation/navigation.component";
import { NavigationItemListComponent } from "./navigation/navigation-item-list/navigation-item-list.component";
import { NavigationItemComponent } from "./navigation/navigation-item/navigation-item.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { RouterModule } from "@angular/router";
import { DialogComponent } from "./dialog/dialog.component";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [
		CommonComponentsComponent,
		NavigationComponent,
		NavigationItemListComponent,
		NavigationItemComponent,
		AvatarComponent,
		DialogComponent,
		ButtonComponent
	],
	imports: [CommonModule, RouterModule, SharedModule],
	exports: [
		CommonComponentsComponent,
		ButtonComponent,
		NavigationItemComponent,
		NavigationItemListComponent,
		NavigationComponent,
		AvatarComponent,
		DialogComponent,
		ButtonComponent
	]
})
export class CommonComponentsModule {}
