const greenbuisness = () => {
	return (
    <div className="container bg-[#0c3b2e]">
      
			<div className="flex  flex-col  xl:flex-row   bg-[#0c3b2e] text-white  justify-center  mx-auto ">
			
        <div className="flex flex-col  w-full  pt-5 pl-10 pr-5 ">
					<h1 className=" text-4xl   font-extrabold  text-white  pb-6 sm:text-5xl  md:text-6xl  ">
            <span className="block min-w-full">Selling online</span>
            <span className="block min-w-full">is vital to</span>
            <span className="block min-w-full">business growth.</span>
					</h1>
					<h2 className="text-xl ">2025 Grow Your e-Commerce Conference</h2>
          <div className="mt-28">
          <span className="block">September 16-18, 2025</span>
					<span className="block">Paragon One Plaza and Sky Garden2</span>
          </div>
					<button className="btn uppercase  mb-4  mt-8 bg-yellow-500 rounded-full   w-fit  text-black py-3  px-8 font-bold ">
						BOOK NOW FOR EARLY BIRD PRICES
					</button>
				</div>
				
        <div className="w-full  bg-sky-200 ">
					<img className="h-full object-cover" src="https://fakeimg.pl/700x450" alt="" />
				</div>
      
      </div>
      
		</div>
	);
};

export default greenbuisness;
