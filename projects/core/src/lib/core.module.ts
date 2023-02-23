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
import { HomePageComponent } from "./components/home-page/home-page.component";
import { HomePageSectionsService } from "./services/home-page-sections.service";

@NgModule({
	imports: [
		CommonModule,
		CommonComponentsModule,
		AuthorizationModule,
		HttpClientModule,
		AuthorizationModule,
		BrowserModule
		// StoreModule.forFeature()
	],
	providers: [DataBaseService, UsersDataService, LessonsDataService, HomePageSectionsService],
	declarations: [CoreComponent, MenteePageComponent, LessonComponent, HomePageComponent],
	exports: [CoreComponent]
})
export class CoreModule {}
