import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonComponentsComponent } from './common-components.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';



@NgModule({
  declarations: [
    CommonComponentsComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CommonComponentsComponent,
    CustomButtonComponent
  ]
})
export class CommonComponentsModule { }
