export interface Lesson {
	id: string;
	title: string;
	description: string;
	files: Resource;
	optional: boolean;
	duration: Date;
}

export interface Resource {
	fileName: string;
	description: string;
}
