import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { RoleInfo } from "../../models/role-info";
import { Roles } from "../../models/roles";

@Component({
	selector: "lib-role",
	templateUrl: "./role.component.html",
	styleUrls: ["./role.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleComponent {
	@Input() role!: RoleInfo;

	@Output() roleEvent: EventEmitter<Roles> = new EventEmitter<Roles>();

	public clickEmit(): void {
		this.roleEvent.emit(this.role.type);
	}
}
