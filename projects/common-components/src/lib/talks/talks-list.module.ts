import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TalksListRoutingModule } from "./talks-list-roiting.module";
import { TalksListComponent } from "./talks-list/talks-list.component";
import {
	CommonComponentsModule,
	TalkItemComponent,
	TalkItemsLineComponent
} from "@jsmu/common-components";
import { SortPipe } from "@jsmu/shared";

@NgModule({
	declarations: [TalksListComponent, SortPipe, TalkItemComponent, TalkItemsLineComponent],
	imports: [CommonModule, TalksListRoutingModule, CommonComponentsModule],
	exports: [TalksListComponent, SortPipe, TalkItemComponent, TalkItemsLineComponent]
})
export class TalksListModule {}
