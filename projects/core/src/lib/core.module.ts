import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { HttpClientModule } from '@angular/common/http';
import { ModulesDataService } from './services/modules-data.service';
import { ModulesService } from './services/modules.service';

@NgModule({
  declarations: [CoreComponent],
  imports: [HttpClientModule],
  exports: [CoreComponent],
  providers: [ModulesDataService, ModulesService],
})
export class CoreModule {}
