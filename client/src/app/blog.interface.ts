export interface PostPreview {
	title: string;
	snippet: string;
	image: string;
	link?: string;
	code?: string;
}

export interface Post {
	title: string;
	subtitle: string;
	content: string;
	date: number;
	id: string;
	image: string;
	snippet: string;
}