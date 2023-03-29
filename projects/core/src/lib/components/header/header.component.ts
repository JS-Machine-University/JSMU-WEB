import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UsersDataService } from "../../services/users.data.service";
import { menuItems } from "../../../../../../src/assets/objects/header.objects";
import { Observable } from "rxjs";
import { User } from "../../authorization/models/user";
import { InfoModalService } from "../../services/info-modal.service";

@Component({
	selector: "jsmu-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public isLoggedIn!: Observable<User | null>;
	public menuItems = menuItems;
	public isSideBarOpen = false;
	public burgerLines = [1, 2, 3];
	public avatarPath = "/assets/images/cat.jpg";

	constructor(
		private usersDataServ: UsersDataService,
		private infoModalService: InfoModalService
	) {}
	ngOnInit(): void {
		this.isUserLogin();
	}

	public isUserLogin(): void {
		this.isLoggedIn = this.usersDataServ.isUserLogin();
	}

	public toggleSideBar(): void {
		this.isSideBarOpen = !this.isSideBarOpen;
	}

	public openModal(): void {
		this.infoModalService.callNextOnSubject(true);
	}
}
