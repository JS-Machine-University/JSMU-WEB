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
import { UserStoreFacade } from "./Store/users/user.store.facade";
import { UserEffects } from "./Store/users/user.effects";

@NgModule({
	imports: [
		CommonModule,
		CommonComponentsModule,
		AuthorizationModule,
		HttpClientModule,
		AuthorizationModule,
		BrowserModule,
		StoreModule.forFeature("users", userReducer, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forFeature([UserEffects]),
		StoreRouterConnectingModule.forRoot()
		RouterModule
		RouterModule,
		SharedModule
		// StoreModule.forFeature()
	],
	declarations: [
		CoreComponent,
		MenteePageComponent,
		LessonComponent,
		HeaderComponent,
		FooterComponent,
		HomePageComponent,
		InfoPanelComponent
	],
	exports: [CoreComponent, HeaderComponent, FooterComponent, InfoPanelComponent],
	providers: [DataBaseService, UsersDataService, LessonsDataService, DialogService]
	providers: [DataBaseService, UsersDataService, LessonsDataService, UserStoreFacade],
	declarations: [CoreComponent, MenteePageComponent, LessonComponent],
	exports: [CoreComponent]
})
export class CoreModule {}
