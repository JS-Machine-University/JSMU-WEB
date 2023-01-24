import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RoleInfo } from "../../models/role-info";
import { Roles } from "../../models/roles";

@Component({
	selector: "jsmu-role",
	templateUrl: "./role.component.html",
	styleUrls: ["./role.component.scss"]
})
export class RoleComponent implements OnInit {
	@Input() role: RoleInfo = {
		name: Roles.MENTEE,
		features: [""]
	};
	@Output() roleEvent: EventEmitter<Roles> = new EventEmitter<Roles>();
	constructor() {}
	ngOnInit(): void {}
	clickEmit() {
		this.roleEvent.emit(this.role.name);
	}
}
