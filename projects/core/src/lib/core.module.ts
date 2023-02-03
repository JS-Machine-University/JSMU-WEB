import { NgModule } from "@angular/core";
import { CoreComponent } from "./core.component";
import { HttpClientModule } from "@angular/common/http";
import { LessonsDataService } from "../services/lessons.data.service";
import { AuthorizationModule } from "./authorization/authorization.module";

@NgModule({
	imports: [HttpClientModule, AuthorizationModule],
	providers: [LessonsDataService],
	declarations: [CoreComponent],
	exports: [CoreComponent]
})
export class CoreModule {}
