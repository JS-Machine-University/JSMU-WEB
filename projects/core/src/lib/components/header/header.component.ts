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
	isLoggedIn!: boolean;
	menuItems = menuItems;
	private destroy$: Subject<void> = new Subject<void>();
	constructor(private authService: AuthService, private usersDataServ: UsersDataService) {}
	ngOnInit(): void {
		this.log();
	}

	public log() {
		this.authService
			.getUser()
			.pipe(takeUntil(this.destroy$))
			.subscribe((sUser) => {
				this.usersDataServ.getUserById(sUser.uid!).subscribe((user: User | null) => {
					this.isLoggedIn = !!user;
					return !!user;
				});
			});
	}
}
