import { json } from "@remix-run/node";
import { Suspense } from "react";
import { Await, useLoaderData } from "@remix-run/react";

type DataType = {
	name: string;
	age: number;
};

// const data: DataType = {
// 	name: "John",
// 	age: 30,
// };

export const loader = () => {
	console.log("loader function called");

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(json({ name: "Johnny Johny 2 ", age: 30 }));
		}, 5000);
	});
};

const Chart = () => {
	const data = useLoaderData<DataType>();

	return (
		<div className="flex  flex-col items-center justify-center">
			<Suspense fallback={<p>Loading...</p>}>
				<Await resolve={data}>{(data) => <p>{data.name}</p>}</Await>
			</Suspense>

			<button className="  hover:bg-red-800  transition-colors  transition-duration-300  border w-1/2 bg-indigo-600 p-2 text-white text-2xl rounded-lg">
				Checkout
			</button>
		</div>
	);
};

export default Chart;
