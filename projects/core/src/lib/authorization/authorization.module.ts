import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {RoleSelectComponent} from "./components/role-select/role-select.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CommonComponentsModule} from "@jsmu/common-components";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../../../src/environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AuthService} from "./services/auth/auth.service";
import {MockDBService} from "./services/mockDB/mock-db.service";



@NgModule({
  declarations: [SignInComponent,RoleSelectComponent,DashboardComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  exports: [
    SignInComponent,
    RoleSelectComponent,
    DashboardComponent
  ],
  providers: [AuthService, MockDBService]
})
export class AuthorizationModule { }
