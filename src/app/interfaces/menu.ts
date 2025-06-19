export interface Menu {
	id: number;
	name?: string;
	path: string;
	children?: Menu[];
}

export interface Result<T = any> {
	data: T;
	message: string;
	statusCode: number;
}
