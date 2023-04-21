import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { initialState, talks, TalksEffects, talksReducer } from "@jsmu/core";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(talks, talksReducer, { initialState: initialState }),
		EffectsModule.forFeature([TalksEffects])
	],
	exports: []
})
export class TalksModule {}
