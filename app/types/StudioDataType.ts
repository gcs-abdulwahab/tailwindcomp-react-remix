export type StudioDataType = {
	title: string;
	phone: string;
	email: string;
	address: string;
	testimonial: {
		title: string;
		desc: string;
		author: string;
		role: string;
		image: string;
	};
	blog: {
		title: string;
		preview: string;
		read_more_url: string;
		read_more_text: string;
	};
};
