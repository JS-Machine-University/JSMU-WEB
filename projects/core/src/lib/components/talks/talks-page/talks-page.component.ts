import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Result } from "../../../models/result";
import { Talk } from "../../../models/talk";

@Component({
	selector: "jsmu-talks-page",
	templateUrl: "./talks-page.component.html",
	styleUrls: ["./talks-page.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksPageComponent {
	public talks: Talk[] = [
		{
			lessonId: "2332",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Irada",
			resultDate: new Date(new Date().getTime()),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Anar",
			resultDate: new Date(new Date().getTime()),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Kanan",
			resultDate: new Date(new Date().getTime() - 186800000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Najaf",
			resultDate: new Date(new Date().getTime() - 186400000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Yelizaveta",
			resultDate: new Date(new Date().getTime() - 186400000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Leyla",
			resultDate: new Date(new Date().getTime() - 286400000),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "Vaxtanq",
			resultDate: new Date(new Date().getTime() - 3212121212),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "anybody",
			resultDate: new Date(new Date().getTime()),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "somebody",
			resultDate: new Date(new Date().getTime() - 123453434334321),
			submitDate: new Date()
		},
		{
			lessonId: "3443",
			result: Result.comment,
			inProgress: true,
			expertId: "Maksim",
			menteeId: "those guy",
			resultDate: new Date(new Date().getTime() - 23332233232),
			submitDate: new Date()
		}
	];
}
