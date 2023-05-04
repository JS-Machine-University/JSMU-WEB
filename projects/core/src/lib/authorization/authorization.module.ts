import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./components/sign-in/sign-in.component";
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
import { MenteeFormService } from "./services/forms/mentee.form.service";
import { RoleSelectComponent } from "./components/role-select/role-select.component";

@NgModule({
	declarations: [SignInComponent, SignOutComponent, RoleSelectComponent, RoleComponent],
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
	exports: [SignInComponent, SignOutComponent, RoleComponent, RoleSelectComponent],
	providers: [AuthService, UsersDataService, MenteeFormService]
})
export class AuthorizationModule {}
