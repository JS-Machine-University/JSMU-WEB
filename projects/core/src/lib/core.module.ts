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

@NgModule({
	imports: [HttpClientModule, AuthorizationModule, BrowserModule],
	providers: [DataBaseService, UsersDataService, LessonsDataService],
	declarations: [CoreComponent, MenteePageComponent, LessonComponent],
	exports: [CoreComponent]
})
export class CoreModule {}
