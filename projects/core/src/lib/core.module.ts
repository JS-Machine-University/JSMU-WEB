import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { CommonComponentsModule } from "@jsmu/common-components";
import { NgModule } from "@angular/core";
import { CoreComponent } from "./core.component";
import { HttpClientModule } from "@angular/common/http";
import { LessonsDataService } from "./services/lessons.data.service";
import { AuthorizationModule } from "./authorization/authorization.module";
import { DataBaseService } from "./services/database.service";
import { UsersDataService } from "./services/users.data.service";
import { MenteePageComponent } from "./components/mentee-page/mentee-page.component";
import { LessonComponent } from "../../../common-components/src/lib/lesson/lesson.component";
import { BrowserModule } from "@angular/platform-browser";
import { metaReducers, reducers } from "./Store/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../../../src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
	imports: [
		CommonModule,
		CommonComponentsModule,
		AuthorizationModule,
		HttpClientModule,
		AuthorizationModule,
		BrowserModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			}
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot()
	],
	providers: [DataBaseService, UsersDataService, LessonsDataService],
	declarations: [CoreComponent, MenteePageComponent, LessonComponent],
	exports: [CoreComponent]
})
export class CoreModule {}
