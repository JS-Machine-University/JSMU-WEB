import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Result, Talk } from "@jsmu/core";

@Component({
	selector: "jsmu-talks-list",
	templateUrl: "./talks-list.component.html",
	styleUrls: ["./talks-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksListComponent {
	public talks: Talk[] = [
		{
			lessonId: "2332",
			result: Result.success,
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
			result: Result.success,
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

	public isShowLine(index: number): boolean {
		return (
			this.talks[index]?.resultDate.toLocaleDateString() !==
			this.talks[index - 1]?.resultDate.toLocaleDateString()
		);
	}
}
