import { Talk } from "./../models/talk";
import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "jsmu-talk-items-line",
	templateUrl: "./talk-items-line.component.html",
	styleUrls: ["./talk-items-line.component.scss"]
})
export class TalkItemsLineComponent implements OnInit {
	@Input() talkItem: Talk;
	talk: Talk;

	ngOnInit(): void {
		this.talk = this.talkItem;
	}
}
