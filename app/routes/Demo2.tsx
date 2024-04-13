
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type {Item } from '../data/data'


const ItemBlock = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-gray-50 rounded-2xl p-2 w-10/12 border-2 border-solid  border-red-400 h-24 relative">
			<p className=" prose pr-5">{children}</p>

			<div className="size-16 rounded-2xl  absolute -right-8 top-3 border-8 border-red-100 border-opacity-90 bg-red-400"></div>
		</div>
	);
};

export async function loader() {
    // import itemData from data/data.ts
const itemData: Item[] = [
        {
            text: "Horem ipsum, dolor sit amet consectetur adipisicing elit. Eius labore quibusdam, perferendis libero nihil nostrum.",
        },
        {
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius labore quibusdam, perferendis libero nihil nostrum.",
        },
        {
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius labore quibusdam, perferendis libero nihil nostrum.",
        },
    ];
    
	
    
	return json(itemData);
}

const Demo2 = () => {
    // useloaderdata to get the data
    const itemData = useLoaderData<typeof loader>();
    
    

	return (
		<div className="container mx-auto  border-2 p-2 mt-14 flex flex-col items-center">
			<h1
				className="text-6xl font-serif font-bold border-2 border-dotted  py-2 my-2  
  
    bg-gradient-to-t from-red-600 to-indigo-500 text-transparent bg-clip-text
    text-center prose"
			>
				Here is what you going to get
			</h1>

			<div className="flex flex-col  lg:flex-row space-x-2 items-center">
				<div className=" flex border-2 border-dotted border-indigo-800 flex-col space-y-4 p-2 items-center justify-center  py-8 order-2   ">
					{itemData.map((item, index) => (
						<ItemBlock key={index}>{item.text}</ItemBlock>
					))}
				</div>
				<div
					className="order-1 border-2 border-dotted border-indigo-800    flex flex-row justify-center items-center grow
    "
				>
					<img
						src="https://fakeimg.pl/600x400"
						className="  shadow-2xl shadow-red-500 rounded-full size-64"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Demo2;
