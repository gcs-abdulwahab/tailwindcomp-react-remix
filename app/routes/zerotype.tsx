import { Outlet } from "@remix-run/react";

const index = () => {
	return (
		<div className="container mx-auto m-2 ">
			<header className=" w-full bg-zinc-100 flex items-center gap-2">
				<img src="https://fakeimg.pl/300" className="size-24 " alt="" />
				<nav className="px-10 w-full h-fit ">
					<ul className="flex justify-between">
						<li><button>Home</button></li>
						<li><button>Feature</button></li>
						<li><button>News</button></li>
						<li><button>About</button></li>
						<li><button>Contact</button></li>
					</ul>
				</nav>
			</header>
			<main className="w-full flex flex-col">
				<Outlet />
			</main>
			<footer className="h-24 px-5 pr-10 w-full bg-zinc-100 flex justify-between items-center">
				<div>2023 Zerotype . All Rights Reserved</div>
				<div>
					<ul className="flex">
						<li><img src="https://fakeimg.pl/35" alt="" /></li>
						<li><img src="https://fakeimg.pl/35" alt="" /></li>
						<li><img src="https://fakeimg.pl/35" alt="" /></li>
						<li><img src="https://fakeimg.pl/35" alt="" /></li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default index;
