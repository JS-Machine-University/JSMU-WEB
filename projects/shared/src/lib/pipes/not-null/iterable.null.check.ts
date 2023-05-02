import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "iterableNullCheck"
})
export class IterableNullCheckPipe<T> implements PipeTransform {
	public transform(experts: T[] | "null"): T[] | [] {
		if (experts === "null") {
			return [];
		} else return experts;
	}
}
