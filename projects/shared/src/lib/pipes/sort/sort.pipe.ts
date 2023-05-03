import { Pipe, PipeTransform } from "@angular/core";
import { Talk } from "@jsmu/core";

@Pipe({
	name: "sort"
})
export class SortPipe implements PipeTransform {
	public transform(talks: Talk[]): Talk[] {
		const talksWithDate = talks.filter((talk) => typeof talk.resultDate === "number");
		const talksWithNull = talks.filter((talk) => talk.resultDate === "null");
		const sortedTalks = talksWithDate.sort((a, b) => (a.resultDate > b.resultDate ? 1 : -1));
		return [...sortedTalks, ...talksWithNull];
	}
}
