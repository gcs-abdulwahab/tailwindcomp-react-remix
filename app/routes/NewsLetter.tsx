// zinc-300
// neutral-600
// orange-300
// bg-pink-900

const ImageGroup = () => {
	return (
		<div className="flex flex-col gap-2">
			<img src="https://fakeimg.pl/700x150" alt="" />
			<img src="https://fakeimg.pl/700x150" alt="" />
      <img src="https://fakeimg.pl/700x150" alt="" />
      <img src="https://fakeimg.pl/700x150" alt="" />
		</div>
	);
};

type TextBlockType = {
	title: string;
	desc: string;
};

const textBlockData: TextBlockType = {
	title: "Class Project Showcase:",
	desc: "Our class is gearing up for an exciting project showcase on 28 March. Parents are invited to join us as students present their projects and share their learning experiences. It promises to be an enriching and enjoyable event.",
};

const projectShowcaseData: TextBlockType = {
	title: "Parent Teacher Conferences:",
	desc: "Parent-Teacher Conferences are scheduled for 20 March. This is a wonderful opportunity for us to discuss your child's progress and goals.",
};

const TextBlock = (data: Required<TextBlockType>) => {
	const { title, desc } = data;
	return (
		<>
			<h2 className="prose prose-2xl font-semibold">{title}</h2>
			<p className="prose ">{desc}</p>
		</>
	);
};

type HeaderType = {
	title: string;
	desc: string;
};
const HeaderObj: HeaderType = {
	title: "school news letter",
	desc: "February 12, 2024 | 123 Anywhere St., Any City",
};

type AboutClass = {
	name: string;
	heading: string;
	desc: string;
	img: string;
};

const aboutclassvar: AboutClass = {
	name: "aboutclass",
	heading: "About our class",
	desc: "Our class has been diving into some captivating literary  adventures. Students recently completed a creative writing   project where they crafted imaginative stories. This month,   our spotlight shines on Olivia Wilson for their exceptional   efforts. consistently goes above and beyond, contributing   positively to our classroom.",
	img: "https://fakeimg.pl/600x400",
};

const AboutClass = (aboutclass: Required<AboutClass>) => {
	const { name, heading, desc, img } = aboutclass;

	return (
		<div id="aboutclass" className="flex flex-row space-x-10 p-12 bg-zinc-300">
			<img
				src={img}
				className="shadow-2xl size-56 shadow-red-500 rounded-full"
				alt={name}
			/>

			<div className="flex flex-col gap-4">
				<h2 className="prose prose-2xl  text-6xl">{heading}</h2>
				<p className="prose text-2xl">{desc}</p>
			</div>
		</div>
	);
};

// create Header Component
const Header = (headerData: HeaderType) => {
	const { title, desc } = headerData;
	return (
		<header className="  bg-pink-900 border-dotted flex flex-col items-center relative mb-4  py-14">
			<h1 className="prose text-6xl uppercase text-center w-full font-extrabold text-orange-300 ">
				{title}
			</h1>
			<div className="prose text-2xl bg-orange-300 inline-block absolute -bottom-4 px-4 text-neutral-600 ">
				<span>{desc}</span>
			</div>
		</header>
	);
};

const NewsLetter = () => {
	return (
		<div className="container mx-auto my-6">
			<Header {...HeaderObj} />

			<main className=" p-12">
				<AboutClass {...aboutclassvar} />

				<div
					id="mainclass"
					className="flex flex-row space-x-10 p-12 mt-2 bg-zinc-300 justify-around"
				>
					<div id="lefty" className="flex flex-col w-4/12 gap-2">
						<h2 className="prose prose-2xl font-bold">Upcoming events</h2>

						<TextBlock {...textBlockData} />

						<div className="flex flex-row justify-evenly">
							<img
								src="https://fakeimg.pl/220x300"
								className="inline-block mr-2"
								alt=""
							/>
							<img
								src="https://fakeimg.pl/220x300"
								className="inline-block "
								alt=""
							/>
						</div>

						<TextBlock {...projectShowcaseData} />
					</div>

					<div className="righty flex flex-col space-y-2 w-8/12 ">
						<ImageGroup />
						<div className="bg-pink-900 p-2  flex flex-col gap-2 ">
							<h2 className="prose prose-2xl font-semibold  text-white text-4xl">
								Reminders
							</h2>
							<p className="prose text-justify prose-xl  w-full block text-white font-sans ">
								Homework and Assignments: Please continue to check the online
								platform/classroom bulletin board for daily homework and any
								upcoming assignments. Consistent review and completion of
								assignments greatly contribute to your child's academic success.
							</p>
						</div>
					</div>
				</div>

				<footer className="h-24 bg-pink-900 w-full"> </footer>
			</main>
		</div>
	);
};

export default NewsLetter;
