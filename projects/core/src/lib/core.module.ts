import { AuthorizationModule } from "./authorization/authorization.module";
import { TalkItemsLineComponent } from "./components/talks/talk-items-line/talk-items-line.component";
import { TalkItemComponent } from "./components/talks/talk-item/talk-item.component";
import { TalksPageComponent } from "./components/talks/talks-page/talks-page.component";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CoreComponent } from "./core.component";
import { CommonModule } from "@angular/common";
import { CommonComponentsModule } from "@jsmu/common-components";

@NgModule({
	declarations: [CoreComponent, TalksPageComponent, TalkItemComponent, TalkItemsLineComponent],
	imports: [
		CommonModule,
		CommonComponentsModule,
		AuthorizationModule
		// StoreModule.forFeature()
	],
	exports: [TalksPageComponent, TalkItemComponent, TalkItemsLineComponent]
})
export class CoreModule {}
