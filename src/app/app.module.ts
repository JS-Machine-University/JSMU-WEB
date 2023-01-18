import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@jsmu/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from '@jsmu/common-components';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';
import { UsersDataService } from 'projects/core/src/services/users.data.service';
import { LessonsDataService } from 'projects/core/src/services/lessons.data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    SharedModule,
    CommonComponentsModule,
    HttpClientModule,
  ],
  providers: [UsersDataService, LessonsDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
