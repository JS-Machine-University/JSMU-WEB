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
import { UsersDataService } from "../services/users.data.service";

@NgModule({
	declarations: [SignInComponent, RoleSelectComponent, RoleComponent],
	imports: [
		CommonModule,
		CommonComponentsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireDatabaseModule
	],
	exports: [SignInComponent, RoleSelectComponent, RoleComponent],
	providers: [AuthService, UsersDataService]
})
export class AuthorizationModule {}
