import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@jsmu/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonComponentsModule} from "common-components";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CommonComponentsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
