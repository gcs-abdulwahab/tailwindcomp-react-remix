
const contacts = () => {
	return (
		<>
			
			<div className="grid grid-cols-2">
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
			</div>
		</>
	);
};

export default contacts;
