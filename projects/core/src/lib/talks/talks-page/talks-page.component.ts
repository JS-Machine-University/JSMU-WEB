import { Component, OnInit } from "@angular/core";
import { Talk } from "../models/talk";

@Component({
	selector: "jsmu-talks-page",
	templateUrl: "./talks-page.component.html",
	styleUrls: ["./talks-page.component.scss"]
})
export class TalksPageComponent implements OnInit {
	sortedTalks: Talk[];
	talks: Talk[] = [
		{
			lessonId: "2332",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Irada",
			resultDate: new Date(new Date().getTime()),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Anar",
			resultDate: new Date(new Date().getTime()),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Kanan",
			resultDate: new Date(new Date().getTime() - 186800000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Najaf",
			resultDate: new Date(new Date().getTime() - 186400000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Yelizaveta",
			resultDate: new Date(new Date().getTime() - 186400000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Leyla",
			resultDate: new Date(new Date().getTime() - 286400000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Vaxtanq",
			resultDate: new Date(new Date().getTime() - 3212121212),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "anybody",
			resultDate: new Date(new Date().getTime()),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "somebody",
			resultDate: new Date(new Date().getTime() - 123453434334321),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: "Discussion of features",
			inProgress: true,
			expertId: "Maksim",
			menteeId: "those guy",
			resultDate: new Date(new Date().getTime() - 23332233232),
			submitDate: new Date()
		}
	];
	constructor() {}

	ngOnInit(): void {
		this.sortedTalks = this.talks.sort((a, b) => (a.resultDate > b.resultDate ? 1 : -1));
	}
}
