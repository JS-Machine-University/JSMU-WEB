import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { CommonComponentsModule } from "@jsmu/common-components";
import { NgModule } from "@angular/core";
import { CoreComponent } from "./core.component";
import { HttpClientModule } from "@angular/common/http";
import { LessonsDataService } from "./services/lessons-data-service/lessons.data.service";
import { AuthorizationModule } from "./authorization/authorization.module";
import { DataBaseService } from "./services/database.service";
import { UsersDataService } from "./services/users.data.service";
import { LessonComponent } from "../../../common-components/src/lib/lesson/lesson.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { InfoPanelComponent } from "./components/info-panel/info-panel.component";
import { DialogService } from "./services/dialog.service";
import { SharedModule } from "@jsmu/shared";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../../../src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { userReducer } from "./Store/users/user.reducer";
import { UserEffects } from "./Store/users/user.effects";
import { UserStoreFacade } from "./Store/users/users.store.facade";
import { RootComponent } from "./components/root/root.component";
import { MenteeDataService } from "./services/mentee.data.service";
import { ExpertModule } from "./components/expert/expert.module";

@NgModule({
	imports: [
		CommonModule,
		CommonComponentsModule,
		HttpClientModule,
		AuthorizationModule,
		StoreModule.forFeature("users", userReducer, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forFeature([UserEffects]),
		StoreRouterConnectingModule.forRoot(),
		RouterModule,
		SharedModule,
		
	],
	declarations: [
		CoreComponent,
		LessonComponent,
		HeaderComponent,
		FooterComponent,
		HomePageComponent,
		InfoPanelComponent,
		RootComponent
	],
	exports: [
		CoreComponent,
		HeaderComponent,
		FooterComponent,
		InfoPanelComponent,
		LessonComponent,
		RootComponent
	],
	providers: [
		DataBaseService,
		UsersDataService,
		LessonsDataService,
		DialogService,
		UserStoreFacade,
		MenteeDataService
	]
})
export class CoreModule {}
