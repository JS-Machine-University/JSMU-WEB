import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UsersDataService } from "../../services/users.data.service";
import { menuItems } from "../../../../../../src/assets/objects/header.objects";
import { Observable } from "rxjs";
import { User } from "../../authorization/models/user";

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
	public isModalOpen!: boolean;

	constructor(private usersDataServ: UsersDataService) {}
	ngOnInit(): void {
		this.isUserLogin();
	}

	public isUserLogin(): void {
		this.isLoggedIn = this.usersDataServ.isUserLogin();
	}

	public toggleSideBar(): void {
		this.isSideBarOpen = !this.isSideBarOpen;
	}

	public closeModal(): void {
		this.isModalOpen = false;
		document.body.classList.remove("jsmu-info-panel__open");
	}

	public openModal(): void {
		this.isModalOpen = true;
	}
}
