import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UsersDataService } from "../../services/users.data.service";
import { menuItems } from "../../../../../../src/assets/objects/header.objects";
import { Observable } from "rxjs";
import { InfoModalService } from "../../services/info-modal.service";
import { AuthService } from "../../authorization/services/auth/auth.service";

@Component({
	selector: "jsmu-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public isLoggedIn!: Observable<boolean>;
	public menuItems = menuItems;
	public isSideBarOpen = false;
	public burgerLines = [1, 2, 3];
	public avatarPath = "/assets/images/cat.jpg";

	constructor(
		private usersDataServ: UsersDataService,
		private userAuth: AuthService,
		private infoModalService: InfoModalService
	) {}
	ngOnInit(): void {
		this.isLoggedIn = this.userAuth.isLoggedIn;
	}
	public toggleSideBar(): void {
		this.isSideBarOpen = !this.isSideBarOpen;
	}

	public openInfoModal(): void {
		this.infoModalService.setVisibleValue(true);
	}
}
