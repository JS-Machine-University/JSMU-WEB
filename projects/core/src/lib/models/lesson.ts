import { Resource } from "./resource";

export interface Lesson {
	id: string;
	title: string;
	resources: Resource[];
	duration: string;
}
