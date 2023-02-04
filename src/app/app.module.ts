import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "@jsmu/shared";
import { CoreModule } from "@jsmu/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonComponentsModule } from "@jsmu/common-components";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { HttpClientModule } from "@angular/common/http";
import { UsersDataService } from "projects/core/src/lib/services/users.data.service";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MenteePageComponent } from "projects/core/src/lib/mentee-page/mentee-page.component";
import { LessonComponent } from "projects/core/src/lib/lesson/lesson.component";
import { LessonsDataService } from "projects/core/src/lib/services/lessons.data.service";
import { DataBaseService } from "projects/core/src/lib/services/database.service";

@NgModule({
	declarations: [AppComponent, MenteePageComponent, LessonComponent],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireDatabaseModule,
		AppRoutingModule,
		SharedModule,
		CommonComponentsModule,
		HttpClientModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([]),
		StoreModule.forRoot({}, {}),
		CoreModule
	],
	providers: [DataBaseService, UsersDataService, LessonsDataService],
	bootstrap: [AppComponent]
})
export class AppModule {}
