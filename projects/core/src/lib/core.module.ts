import { NgModule } from "@angular/core";
import { CoreComponent } from "./core.component";
import { HttpClientModule } from "@angular/common/http";
import { LessonsDataService } from "./services/lessons.data.service";
import { AuthorizationModule } from "./authorization/authorization.module";
import { DataBaseService } from "./services/database.service";
import { UsersDataService } from "./services/users.data.service";

@NgModule({
	imports: [HttpClientModule, AuthorizationModule],
	providers: [DataBaseService, UsersDataService, LessonsDataService],
	declarations: [CoreComponent],
	exports: [CoreComponent]
})
export class CoreModule {}
