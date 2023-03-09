import { Component, OnInit } from "@angular/core";
import { UsersDataService } from "../../services/users.data.service";
import { menuItems } from "../../../../../../src/assets/objects/header.objects";

@Component({
	selector: "jsmu-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
	public isLoggedIn!: boolean;
	public menuItems = menuItems;
	public sideBar = false;
	public avatarPath = "/assets/images/cat.jpg";

	constructor(private usersDataServ: UsersDataService) {}
	ngOnInit(): void {
		this.isUserLogin();
	}

	public isUserLogin(): void {
		this.usersDataServ.isUserLogin().subscribe((user) => {
			this.isLoggedIn = !!user;
		});
	}
}
