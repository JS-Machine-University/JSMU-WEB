import { Component, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { AuthService } from "../../authorization/services/auth/auth.service";
import { UsersDataService } from "../../services/users.data.service";
import { User } from "../../authorization/models/user";
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
	private destroy$: Subject<void> = new Subject<void>();
	constructor(private authService: AuthService, private usersDataServ: UsersDataService) {}
	ngOnInit(): void {
		this.isUserLogin();
	}

	public isUserLogin() {
		this.authService
			.getUser()
			.pipe(takeUntil(this.destroy$))
			.subscribe((sUser) => {
				this.usersDataServ.getUserById(sUser.uid!).subscribe((user: User | null) => {
					return (this.isLoggedIn = !!user);
				});
			});
	}
}
