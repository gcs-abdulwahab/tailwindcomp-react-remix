import React from "react";

const contacts = () => {
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
			<main className="grid grid-cols-2 ">
				<div id="contactform" className="space-y-1">
					<h2 className="text-3xl font-semibold">Contact Us</h2>
					<hr />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
						est inventore quasi laudantium eaque suscipit porro quaerat
						perferendis aut distinctio ut repellat sapiente iste soluta
						blanditiis consequuntur aperiam, ratione fugit molestiae fuga earum.
						Non sunt neque quis blanditiis inventore quaerat cum quas nemo eos
						voluptate ullam quisquam corporis velit, dolore iure magnam fuga
						doloribus fugit odit officiis. Quos tenetur suscipit nostrum veniam,
						possimus ullam eaque, incidunt, doloremque dolores ratione harum
					</p>
					<form action="" className="flex flex-col gap-1">
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<input type="text" placeholder="Subject" />
						<textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
						<button className="w-fit self-end px-4">Submit</button>

					</form>



				</div>
				<div className="flex flex-col items-center text-3xl gap-4 py-9">
					<h1 className="">For Inquiries Please Call:</h1>
					<h1 className="">877-433-8137</h1>
					<h2 className="">Or you can visit us at:</h2>
					<h2 className="">ZeroType</h2>
					<h3 className="">250 Business ParK Angel Green, Sunville 109935</h3>
				</div>
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

export default contacts;
