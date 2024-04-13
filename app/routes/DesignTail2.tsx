
type HeroType = {
    title: string
    desc: string
    author: string
    role: string
    img: string}

const HeroData = {
    title: "What our client say about us",
    desc: "We are a team of designers and developers who are passionate about creating beautiful, modern websites.",
    author: "John Doe",
    role: "Designer",
    img: "https://fakeimg.pl/200x200",
}

const Hero = ( HeroData:HeroType  ) => {
	return (
		<div className="container prose max-w-7xl mx-auto mb-8 mt-4  items-center pb-16 flex  flex-col rounded-3xl space-y-2 bg-indigo-950 pt-20 gap-2 relative  ">
			<div
				className=" -left-4 z-20 bg-purple-500 size-16 rounded-full absolute top-12  shadow-[0px_0px_200px_46px_#AEFFFFFF] 
items-center justify-center flex "
			>
				<span className="text-5xl text-white font-bold -mt-4">;</span>
			</div>

			<div
				className=" right-24 z-20 bg-purple-500 size-24 rounded-full absolute top-2  shadow-[0px_0px_200px_46px_#AEFFFFFF] 
items-center justify-center flex "
			>
				<span className="text-5xl text-white font-bold -mt-4">;</span>
			</div>

			<div
				className=" -right-4 z-20 bg-purple-500 size-16 rounded-full absolute bottom-20  shadow-[0px_0px_200px_46px_#AEFFFFFF] 
items-center justify-center flex "
			>
				<span className="text-5xl text-white font-bold -mt-4">;</span>
			</div>

			<div
				className=" left-8 z-20 bg-purple-500 size-24 rounded-full absolute bottom-12  shadow-[0px_0px_200px_46px_#AEFFFFFF] 
items-center justify-center flex "
			>
				<span className="text-5xl text-white font-bold -mt-4">;</span>
			</div>

			<h1 className="text-center text-6xl  bg-gradient-to-t from-purple-400 to-indigo-50 font-extrabold text-transparent bg-clip-text">
				{HeroData.title}
			</h1>
			<p className="w-2/3 text-center  prose lg:prose-xl   text-white">
				{HeroData.desc}
			</p>
			<div className="flex  items-center p-2 gap-3">
				<img
					alt=""
					className="size-12 border-2 shadow-2xl drop-shadow-2xl border-indigo-900 rounded-full "
					src={HeroData.img}
				></img>
				<span className="text-white text-base">{HeroData.author} </span>
			</div>
		</div>
	);
};

const DesignTail2 = () => {
	return <Hero  {...HeroData} />;
};

export default DesignTail2;
