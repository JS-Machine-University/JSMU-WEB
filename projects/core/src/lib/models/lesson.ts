export interface Lesson {
	id: string;
	title: string;
	description: string;
	files: Resources[];
	optional: boolean;
	duration: string;
}

export interface Resources {
	name: string;
	description: string;
	url: string;
}
