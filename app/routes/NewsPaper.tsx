const NewsPaper = () => {
	return (
		<div id="newspaper" className="w-[900px] mx-auto flex flex-col  gap-1 p-4 ">
			<div	id="header"
				className="flex justify-center flex-col p-2   w-full relative "
			>
				<h1 className="text-center  uppercase text-7xl ">
					Fauget News
				</h1>
				<h2 className=" text-right absolute right-0 ">Volume 10</h2>
			</div>
			<div id="headline" className=" uppercase text-center border-y  text-4xl">
				climate change
			</div>
			<h2 id="subheading" className="uppercase">
				temperatures and weather patterns
			</h2>
			<div className="grid grid-cols-3 gap-2">
				<div>
					<img className="w-full" src="https://fakeimg.pl/200" alt=" " />
					<hr />
					<h1>The Rising Water</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
						corporis culpa quia placeat. Nemo adipisci dolores non impedit
						distinctio quo nesciunt culpa, ad reprehenderit iure quod,
						reiciendis vel rerum voluptate aliquam illum ipsum dolor ipsa quia
						sunt in odio quam. Assumenda porro reiciendis ipsam qui autem culpa
						doloribus error consequuntur?Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Neque iusto delectus reprehenderit explicabo
						repellat similique. Autem, voluptate officia, cum dolore obcaecati
						dolorum asperiores beatae accusamus labore excepturi voluptates
						dicta officiis fugiat minus sunt quas delectus necessitatibus a aut
						id inventore hic pariatur? Sit qui nihil magni voluptatum quos,
						perspiciatis ipsam?
					</p>
				</div>
				<div className="col-span-2">
					<img src="https://fakeimg.pl/200" className="w-full" alt="" />

					{/* subgrid of two */}
					<div className="grid grid-cols-2 gap-2">
						<div>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
							impedit doloribus vitae eveniet qui et, labore nobis optio hic aut
							culpa animi dicta, consequatur vero libero dolore ad obcaecati
							corporis iure ratione reiciendis eos! Veritatis iste corrupti
							quisquam alias perspiciatis? Est dolores corrupti impedit quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ullam tempore tenetur earum recusandae labore delectus laudantium ipsum perspiciatis. Praesentium ab numquam accusantium dolor mollitia.
						</div>
						<div>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
							impedit doloribus vitae eveniet qui et, labore nobis optio hic aut Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima at atque numquam assumenda, itaque eaque, in enim animi nesciunt consequuntur aliquam. Tempore eaque iusto doloribus!
							culpa animi dicta, consequatur vero libero dolore ad obcaecati
							corporis iure ratione reiciendis eos! Veritatis iste corrupti
							quisquam alias perspiciatis? Est dolores corrupti impedit quam.
						</div>
					</div>
				</div>

				
            </div>
            <footer className="flex  justify-center items-center relative ">
                    <p className="text-center w-fit">Copyright 2022</p>
                    <span className="absolute right-0 left-auto ">9</span>
				</footer>
		</div>
	);
};

export default NewsPaper;
