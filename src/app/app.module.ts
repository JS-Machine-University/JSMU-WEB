import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@jsmu/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from '@jsmu/common-components';
import { CoreModule } from '../../projects/core/src/lib/core.module';
import { MenteePageComponent } from 'projects/core/src/lib/mentee-page/mentee-page.component';
import { ModuleComponent } from 'projects/core/src/lib/module/module.component';
import { ModulesDataService } from 'projects/core/src/lib/services/modules-data.service';
import { ModulesService } from 'projects/core/src/lib/services/modules.service';

@NgModule({
  declarations: [AppComponent, MenteePageComponent, ModuleComponent],
  providers: [ModulesDataService, ModulesService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonComponentsModule,
    CoreModule,
  ],
})
export class AppModule {}
