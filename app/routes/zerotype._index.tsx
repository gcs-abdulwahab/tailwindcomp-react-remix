const index = () => {
	return (
		<>
			<div id="hero" className="flex px-4 w-8/12 self-center">
				<div className="basis-1/2 flex flex-col gap-1 ">
					<h1 className="uppercase text-6xl">Ideas ?</h1>
					<h2 className="font-bold w-fit">Thats what we live for </h2>
					<p>
						Wix is an online website builder with a simple drag & drop
						interface, meaning you do the work online and instantly publish to
						the web.
					</p>
					<button className="bg-red-50 p-3 w-fit"> try it now </button>
					<span className="w-fit">Dont worry its free</span>
				</div>
				<div className="basis-1/2 ">
					<img src="https://fakeimg.pl/300" className="mx-auto" alt="" />
				</div>
			</div>
			<div id="features" className="flex flex-wrap  w-full ">
				<h1 className="w-full font-bold">Design with Simplicity</h1>
				<div className="w-1/2 ">
					<ul className="flex flex-col gap-3 px-4">
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Doloribus eum quam libero aperiam ut.
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Doloribus eum quam libero aperiam ut.
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Doloribus eum quam libero aperiam ut.
						</li>
					</ul>
				</div>
				<div className="w-1/2">
					<ul className="flex flex-col gap-3 px-4">
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Doloribus eum quam libero aperiam ut.
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Doloribus eum quam libero aperiam ut.
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Doloribus eum quam libero aperiam ut.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default index;
