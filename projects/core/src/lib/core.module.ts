import { TalkItemsLineComponent } from "./talks/talk-items-line/talk-items-line.component";
import { TalkItemComponent } from "./talks/talk-item/talk-item.component";
import { TalksPageComponent } from "./talks/talks-page/talks-page.component";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CoreComponent } from "./core.component";
import { CommonModule } from "@angular/common";
import { CommonComponentsModule } from "@jsmu/common-components";

@NgModule({
	declarations: [CoreComponent, TalksPageComponent, TalkItemComponent, TalkItemsLineComponent],
	imports: [
		CommonModule,
		CommonComponentsModule
		// StoreModule.forFeature()
	],
	exports: [CoreComponent, TalksPageComponent, TalkItemComponent]
})
export class CoreModule {}
