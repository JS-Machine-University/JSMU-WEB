import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UsersDataService } from "../../services/users.data.service";
import { menuItems } from "../../../../../../src/assets/objects/header.objects";

@Component({
	selector: "jsmu-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public isLoggedIn!: boolean;
	public menuItems = menuItems;
	public isSideBarOpen = false;
	public spans = [1, 2, 3];
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

	public toggleSideBar(): void {
		this.isSideBarOpen = !this.isSideBarOpen;
	}
}
