import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { talks, TalksEffects, talksReducer } from "@jsmu/core";
import {
	CommonComponentsModule,
	TalkItemComponent,
	TalkItemsLineComponent,
	TalksListComponent
} from "@jsmu/common-components";
import { RouterModule, Routes } from "@angular/router";
import { SortPipe } from "@jsmu/shared";
import { EffectsModule } from "@ngrx/effects";

export const routes: Routes = [
	{
		path: "",
		component: TalksListComponent
	}
];

@NgModule({
	declarations: [TalksListComponent, TalkItemComponent, TalkItemsLineComponent, SortPipe],
	imports: [
		CommonModule,
		CommonComponentsModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature(talks, talksReducer),
		EffectsModule.forFeature([TalksEffects])
	],
	exports: [TalksListComponent, TalkItemComponent, TalkItemsLineComponent]
})
export class TalksModule {}
