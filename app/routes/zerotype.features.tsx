import React from "react";

const FeatureItem = () => {
	

	return (
		<div id="feature-item-1" className="flex">
		<div>
			<img src="https://fakeimg.pl/150" alt="" />
		</div>
		<div className="flex flex-col">
			<h1>Customizable and Easy </h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
				laborum. Veritatis eveniet officia commodi nisi autem corporis
				laudantium officiis odit est porro consectetur praesentium optio
			</p>
		</div>
		</div>
	)
}


const features = () => {
	return (
		<div className="container mx-auto m-2 ">
			<header className=" w-full bg-zinc-100 flex items-center gap-2">
				<img src="https://fakeimg.pl/300" className="size-24 " alt="" />
				<nav className="px-10 w-full h-fit ">
					<ul className="flex justify-between">
						<li>
							<button>Home</button>
						</li>
						<li>
							<button>Feature</button>
						</li>
						<li>
							<button>News</button>
						</li>
						<li>
							<button>About</button>
						</li>
						<li>
							<button>Contact</button>
						</li>
					</ul>
				</nav>
			</header>
			<main className="w-full flex flex-col">
				<h1 className="text4xl font-bold">Features</h1>
				<p>
					Change, add, and remove items as you like. If you're having problems
					editing this website template, then don't hesitate to ask for help on
					the Forums.
				</p>
			
				<FeatureItem />
				<FeatureItem />
				<FeatureItem />


			</main>
			<footer className="h-24 px-5 pr-10 w-full bg-zinc-100 flex justify-between items-center">
				<div>2023 Zerotype . All Rights Reserved</div>
				<div>
					<ul className="flex">
						<li>
							<img src="https://fakeimg.pl/35" alt="" />
						</li>
						<li>
							<img src="https://fakeimg.pl/35" alt="" />
						</li>
						<li>
							<img src="https://fakeimg.pl/35" alt="" />
						</li>
						<li>
							<img src="https://fakeimg.pl/35" alt="" />
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default features;
