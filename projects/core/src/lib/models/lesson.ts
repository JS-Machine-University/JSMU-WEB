import { Resource } from "./resource";

export interface Lesson {
	id: string;
	title: string;
	description: string;
	resources: Resource[];
	optional: boolean;
	duration: string;
}
