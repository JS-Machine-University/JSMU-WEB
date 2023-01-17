import { Resource } from "./resource";

export interface Lesson {
	id: string;
	title: string;
	description: string;
	resource: Resource[];
	optional: boolean;
	duration: string;
}
