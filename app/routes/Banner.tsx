import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// const data = {
//     title: 'New Year Sale',
//     subtitle: 'upto 70% off',
//     website: 'www.reallygreatsite.com',
//     date_duration : '01 - 29 July 2092'
// }
// create the type
type BannerType = {
	title: string;
	subtitle: string;
	website: string;
	date_duration: string;
};

//  write loader
export function loader() {
    const data: BannerType = {
		title: "New Year Sale",
		subtitle: "upto 80% off",
		website: "www.reallygreatsite.com",
		date_duration: "01 - 29 July 2029",
    };
    // return banner data after 3 seconds and return the promise
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(json(data));
        }, 3000);
    })

	
}

const Banner = () => {
	const data = useLoaderData<typeof loader>();

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
				<h2 className="text-6xl uppercase tracking-widest">{data.subtitle}</h2>
				<button className="max-w-fit bg-gradient-to-r from-yellow-700 to-orange-300 p-2">
					{data.date_duration}
				</button>
			</div>
		</div>
	);
};

export default Banner;
