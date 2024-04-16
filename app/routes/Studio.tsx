import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { StudioDataType } from "~/types/StudioDataType";
import { studioData } from "~/data/StudioData";


export async function loader() {
    
    const data = studioData;

	return json(data);
}

const Studio = () => {
	// useLoader Data as it is returning an object of type StudioDataType
	const { title, phone, email, address, testimonial, blog } =
		useLoaderData<StudioDataType>();

	return (
		<div className="relative mx-auto flex w-[800px] flex-col bg-yellow-400 mt-2">
			<div
				id="topheader"
				className="flex h-20 items-center justify-center text-2xl"
			>
				<h1 className="text-center uppercase">{title}</h1>
			</div>
			<div id="imgbg" className="relative h-72 bg-purple-400">
				<img
					src="https://fakeimg.pl/50x100"
					className="absolute h-full w-full object-cover"
					alt=""
				/>
			</div>

			<div
				id="hero"
				className="relative -top-20 mx-10 flex h-72 flex-col items-center space-y-4 bg-stone-100 px-6 py-8"
			>
				<h1 className="text-5xl bg-gradient-to-tr from-orange-600 to-yellow-500 font-bold text-transparent bg-clip-text">
					Studio Shodwe Testimonials
				</h1>
				<p>{testimonial.desc}</p>
				<div className="flex flex-row items-center gap-5">
					<img src={testimonial.image} className="rounded-full" alt="" />
					<span className="font-bold">{testimonial.author} </span> |
					<span> {testimonial.role} </span>
				</div>
			</div>
			<div id="blog" className="flex gap-8 bg-stone-100 px-10 py-14">
				<img
					src="https://fakeimg.pl/250"
					className="basis-1/3  rounded-t-2xl  "
					alt=""
				/>

				<div id="blogdetail" className="flex basis-2/3 flex-col gap-2 p-2">
					<h1 className="text-4xl font-bold">{blog.title}</h1>
					<p>{blog.preview}</p>
					<button className="bg-gradient-to-r from-orange-600 to-yellow-500 text-2xl text-white font-bold p-3">{blog.read_more_text}</button>
				</div>
			</div>

			<footer className="flex h-20 items-center justify-evenly gap-5">
				<div id="phone" className="flex items-center p-1  gap-2">
					<span className="inline-block size-8  "></span>
					<span className="">{phone}</span>
				</div>

				<div id="mail" className="flex items-center p-1 gap-2">
					<span className="inline-block size-8 "></span>
					<span>{email}</span>
				</div>
				<div id="location" className="flex items-center p-1 gap-2 ">
					<span className="inline-block size-8 "></span>
					<address>{address}</address>
				</div>
			</footer>
		</div>
	);
};

export default Studio;
