import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { BannerType } from "~/data/data";
import {BannerData} from "~/data/data";

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
			className="mx-auto flex h-72 items-center justify-center bg-slate-800 bg-cover bg-center text-white"
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
				<h2 className="text-6xl uppercase tracking-widest">
					{data.subtitle}
				</h2>
				<button className="max-w-fit bg-gradient-to-r from-yellow-700 to-orange-300 p-2">
					{data.date_duration}
				</button>
			</div>
		</div>
	);
};

export default Banner;
