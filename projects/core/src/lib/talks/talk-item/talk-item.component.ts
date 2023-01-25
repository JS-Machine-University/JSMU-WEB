import { Talk } from "./../models/talk";
import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "jsmu-talk-item",
	templateUrl: "./talk-item.component.html",
	styleUrls: ["./talk-item.component.scss"]
})
export class TalkItemComponent implements OnInit {
	@Input() allTalks: Talk[];
	talks: Talk[];
	constructor() {}

	ngOnInit(): void {
		this.talks = this.allTalks;
	}
}
