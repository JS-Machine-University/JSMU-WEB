import { Pipe, PipeTransform } from "@angular/core";
import { Talk } from "@jsmu/core";

@Pipe({
	name: "sort"
})
export class SortPipe implements PipeTransform {
	transform(talks: Talk[]): Talk[] {
		return talks.sort((a, b) => (a.resultDate > b.resultDate ? 1 : -1));
	}
}
