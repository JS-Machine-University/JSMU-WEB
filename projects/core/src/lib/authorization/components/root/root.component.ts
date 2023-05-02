import { Component, OnInit } from "@angular/core";
import { UserStoreFacade } from "../../../Store/users/users.store.facade";
import { AuthService } from "../../services/auth/auth.service";

@Component({
	selector: "jsmu-root-c",
	templateUrl: "./root.component.html",
	styleUrls: ["./root.component.scss"]
})
export class RootComponent implements OnInit {
	constructor(private userFacade: UserStoreFacade, private authService: AuthService) {}
	ngOnInit(): void {
		this.authService.isLoggedIn.subscribe((state) => {
			if (state) {
				this.userFacade.authUser();
			}
		});
	}
}
