const ListItem = ({ text }: { text: string }) => {
    
	return (
		<div className="relative  w-10/12 rounded-2xl border-2 border-solid border-red-400 bg-gray-50 p-2">
			<p className="prose pr-5 text-wrap  ">{text}  </p>
			<div className="absolute -right-8 top-1/2 transform -translate-y-1/2 size-16 rounded-2xl border-8 border-red-100 border-opacity-90 bg-red-400"></div>
		</div>
	);
};
export default function DesignTail1(){
	return (
		<div className="container mx-auto mt-14 flex flex-col items-center border-2 p-2">
			<h1 className="prose my-2 bg-gradient-to-t from-red-600 to-indigo-500 bg-clip-text py-2 text-center font-serif text-6xl font-bold text-transparent">
				Here is what you going to get
			</h1>

			<div className="flex flex-col items-center space-x-2 lg:flex-row">
				<div className="order-2 flex flex-col items-center justify-center space-y-4  border-indigo-800 p-2 py-8">
                    <ListItem text="Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus laborum, modi quo nesciunt corporis." />
                    <ListItem text="Lorem ipsum dolor sitipsum dolor sitipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus laborum, modi quo nesciunt corporis." />
                    <ListItem text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus laborum, modi quo nesciunt corporis." />
				</div>
				<div className="order-1 flex grow flex-row items-center justify-center  border-indigo-800">
					<img
						src="https://fakeimg.pl/600x400"
						className="size-64 rounded-full shadow-2xl shadow-red-500"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
