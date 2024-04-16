import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";

import { ChevronRight } from "lucide-react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import type { BannerType } from "~/data/data";
import { BannerData } from "~/data/data";

// create the type

//  write loader
export function loader() {
	// return banner data after 3 seconds and return the promise
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(json(BannerData));
		}, 3000);
	});
}

const Banner = () => {
	const data: BannerType = useLoaderData<typeof loader>() as BannerType;

	return (
		<div
			id="banner"
			className="mx-auto flex  pb-2 items-center justify-center bg-slate-800 bg-cover bg-center text-white"
			style={{
				backgroundImage:
					"url('https://i.ibb.co/bsDMYBF/reallygreatsite-com.png')",
			}}
		>
			<div className="flex max-w-fit flex-col items-center gap-2 text-center">
				<h1 className="text-center font-mono text-sm uppercase tracking-wider">
					{data.website}
				</h1>
				<h2 className="bg-gradient-to-r from-yellow-700 to-orange-300 bg-clip-text text-5xl uppercase text-transparent">
					{data.title}
				</h2>
				<h2 className="text-6xl uppercase tracking-widest">{data.subtitle}</h2>

				<Button className="bg-gradient-to-r from-yellow-700 to-orange-300 p-2">
					<ChevronRight className="h-4 w-4" /> {data.date_duration}
				</Button>

				<hr />
				<Card >
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card Description Lorem, ipsum dolor.</CardDescription>
					</CardHeader>
					<CardContent>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
							deserunt unde possimus culpa eveniet. Corrupti, esse illo officiis
							accusamus vero praesentium exercitationem, totam repellendus
							dolorum reiciendis mollitia aut autem vel minus, ratione
							veritatis. Harum unde praesentium commodi error corporis. Sapiente
							necessitatibus sequi, mollitia officiis molestiae reprehenderit
							quis voluptatem ea minus.
						</p>
					</CardContent>
					<CardFooter>
						<p className="text-center">Card Footer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, consequatur.</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Banner;
