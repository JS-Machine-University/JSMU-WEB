import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabase, AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				AppRoutingModule,
				AngularFireModule.initializeApp(environment.firebaseConfig),
				AngularFireDatabaseModule,
				HttpClientModule
			],
			declarations: [AppComponent],
			providers: [AngularFireDatabase]
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	// it(`should have as title 'JSMU-WEB'`, () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.componentInstance;
	// 	expect(app.title).toEqual("JSMU-WEB");
	// });
});
