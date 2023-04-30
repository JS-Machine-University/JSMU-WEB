import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { menteeTalks } from "./mentee-talks.selectors";
import { menteeTalksReducer } from "./mentee-talks.reducer";
import { EffectsModule } from "@ngrx/effects";
import { MenteeTalksEffects } from "./mentee-talks.effects";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(menteeTalks, menteeTalksReducer),
		EffectsModule.forFeature([MenteeTalksEffects])
	]
})
export class MenteeTalksModule {}
