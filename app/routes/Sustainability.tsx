const Sustainability = () => {
	return (
		<div className="max-w-screen-sm mx-auto bg-yellow-100 ">
			<header className="bg-slate-100 flex flex-col items-center justify-center font-bold gap-1 h-72 relative ">
				<div className="flex  h-2  w-full justify-between bg-lime-600 absolute top-0"></div>
				<div className="flex w-full gap-1 justify-between px-10 absolute top-2">
					<span className="  basis-1/4 ">Edition # 30</span>
					<span className="  basis-1/4 ">September 2030</span>
				</div>
				<h2 className="uppercase tracking-wider">newsletter</h2>
				<h1 className="uppercase text-5xl">Sustainability news </h1>
				<h2 className="">The beauty of nature</h2>
				<div className="flex w-full h-4  justify-between absolute bottom-0">
					<div className=" basis-1/4 bg-lime-600"></div>
					<div className=" basis-1/4 bg-lime-600"></div>
				</div>
			</header>

			<section className="flex flex-col items-center justify-center border-b-2 border-solid border-green-700">
				<img src="https://fakeimg.pl/700x250" alt="" />
				<h1 className="uppercase bg-white w-full text-center font-bold ">
					Top news of the month
				</h1>
			</section>

			<section className="flex bg-white flex-col">
				<div id="blg1" className="flex">
					<div className="w-1/3 ">
						<div className="bg-lime-700   flex flex-col items-center justify-center px-12 gap-2 h-full">
							<h1 className="text-white uppercase font-extrabold tracking-widest">
								How to make soil fertile
							</h1>
							<span className="text-xs text-lime-900 font-bold self-start">
								By Olivia Wilson
							</span>
						</div>
					</div>
					<div className="w-2/3 flex">
						<div className="bg-red-50  w-64"></div>
						<div className="flex flex-col grow">
							<h1 className="uppercase p-2 font-bold text-2xl">read more</h1>
							<p className="prose text-sm">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
								corrupti nam eius aperiam ipsum at! Cumque quisquam ducimus
								exercitationem molestias maiores illum quidem quia beatae
								mollitia similique ullam aliquam ea, laudantium, tenetur
								temporibus Lorem ipsum dolor sit, amet consectetur adipisicing
								elit.
							</p>
						</div>
					</div>
                </div>
                

                <div id="blg2" className="flex">
					<div className="w-1/3 order-3">
						<div className="bg-lime-700   flex flex-col items-center justify-center px-12 gap-2 h-full">
							<h1 className="text-white uppercase font-extrabold tracking-widest">
								Winter Vegetable Gardening
							</h1>
							<span className="text-xs text-lime-900 font-bold self-start">
								By Howard Sultan
							</span>
						</div>
					</div>
					<div className="w-2/3 flex order-1">
						<div className="bg-red-50  w-64 order-2"></div>
						<div className="flex flex-col grow order-1">
							<h1 className="uppercase p-2 font-bold text-2xl text-right  ">read more</h1>
							<p className="prose text-sm">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
								corrupti nam eius aperiam ipsum at! Cumque quisquam ducimus
								exercitationem molestias maiores illum quidem quia beatae
								mollitia similique ullam aliquam ea, laudantium, tenetur
								temporibus Lorem ipsum dolor sit, amet consectetur adipisicing
								elit.
							</p>
						</div>
					</div>
				</div>





			</section>
		</div>
	);
};

export default Sustainability;
