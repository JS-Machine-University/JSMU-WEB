import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { RoleSelectComponent } from "./components/role-select/role-select.component";
import { CommonComponentsModule } from "@jsmu/common-components";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../../../../../src/environments/environment";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AuthService } from "./services/auth/auth.service";
import { RoleComponent } from "./components/role/role.component";
import { RouterModule } from "@angular/router";
import { UsersDataService } from "../services/users.data.service";
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import { RootComponent } from "./components/root/root.component";
import { RegisterComponent } from "./components/register/register.component";
import { MenteeFormService } from "./services/forms/mentee.form.service";

@NgModule({
	declarations: [
		SignInComponent,
		RoleSelectComponent,
		RoleComponent,
		SignOutComponent,
		RootComponent,
		RegisterComponent
	],
	imports: [
		CommonModule,
		CommonComponentsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireDatabaseModule,
		RouterModule
	],
	exports: [
		SignInComponent,
		RoleSelectComponent,
		RoleComponent,
		SignOutComponent,
		RootComponent,
		RegisterComponent
	],
	providers: [AuthService, UsersDataService, MenteeFormService]
})
export class AuthorizationModule {}
