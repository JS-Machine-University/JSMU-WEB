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

@NgModule({
	imports: [
		CommonModule,
		CommonComponentsModule,
		AuthorizationModule,
		HttpClientModule,
		AuthorizationModule,
		BrowserModule,
		RouterModule
		// StoreModule.forFeature()
	],
	providers: [DataBaseService, UsersDataService, LessonsDataService],
	declarations: [
		CoreComponent,
		MenteePageComponent,
		LessonComponent,
		HeaderComponent,
		FooterComponent,
		HomePageComponent,
		InfoPanelComponent
	],
	exports: [CoreComponent, HeaderComponent, FooterComponent]
})
export class CoreModule {}
