import { Resources } from "./resources";

export interface Lesson {
	id: string;
	title: string;
	description: string;
	resources: Resources[];
	optional: boolean;
	duration: string;
}
