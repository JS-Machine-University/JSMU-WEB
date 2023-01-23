import { Component } from "@angular/core";
import { User } from "projects/core/src/services/database.service";
import { UsersDataService } from "projects/core/src/services/users.data.service";

@Component({
	selector: "jsmu-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	constructor(private udb: UsersDataService) {}
	public saveUser(user: User) {
		this.udb.saveUser(user).subscribe();
	}
	public getUser() {
		this.udb.getUser().subscribe();
	}
}
