export interface ModuleInterface {
	id: string;
	title: string;
	description: string;
	files: FilesObj;
	optional: boolean;
	duration: Date;
}

export interface FilesObj {
	fileName: string;
}
