import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { HttpClientModule } from '@angular/common/http';
import { ModulesDataService } from './services/modules-data.service';
import { ModulesService } from './services/modules.service';
import { AuthorizationModule } from "./authorization/authorization.module";

@NgModule({
  imports: [HttpClientModule, AuthorizationModule],
  providers: [ModulesDataService, ModulesService],
	declarations: [CoreComponent],
	exports: [CoreComponent]
})
export class CoreModule {}
