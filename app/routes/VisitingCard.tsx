import {
	CheckIcon,
	FaceSmileIcon,
	GlobeAltIcon,
	MapPinIcon,
	PhoneIcon,
} from "@heroicons/react/24/solid";

interface IContactDetail {
	name: string;
	title: string;
	email: string;
	phone: string;
	address: string;
	image: string;
	website: string;
	socialLinks: { link: string; url: string }[];
}

const contactDetail: IContactDetail = {
	name: "Abdul Wahab",
	title: "Content Manager",
	email: "FjF0k@example.com",
	phone: "1234567890",
	address: "123 Main St, Anytown USA",
	image: "https://fakeimg.pl/600x400",
	website: "https://example.com",
	socialLinks: [
		{ link: "facebook", url: "https://www.facebook.com/example" },
		{ link: "github", url: "https://github.com/example" },
		{ link: "twitter", url: "https://twitter.com/example" },
		
	],
};

const VCard = (contact: IContactDetail) => {
	return (
		<div className="flex  container w-[800px] pb-14  mx-auto  text-[#459DBB] bg-slate-50 rounded-lg shadow-xl  ">
			<div className="flex w-5/12 items-center justify-center ">
				<img
					className="size-52 rounded-full object-cover border-[#459DBB] border-8"
					src={contact.image}
					alt=""
				/>
			</div>
			<div className="my-5 flex w-7/12 flex-col space-y-3  mt-12">
				<div id="parta" className="flex flex-col   mb-12">
					<h1 className="prose font-serif text-4xl font-bold">
						{contact.name}
					</h1>
					<h2 className="prose text-2xl text-neutral-600 font-bold  ml-8">
						{contact.title}
					</h2>
				</div>
				<div id="partb" className="flex flex-col  space-y-3">
					{contact.socialLinks.map((link, index) => (
						<div key={index}  className=" ml-4 flex space-x-4">
							<span className="prose">
								<PhoneIcon className="h-6 w-6 text-blue-500" />
							</span>
							<span>{contact.phone}</span>
						</div>
					))}

					{/* <div className=" ml-4 flex space-x-4">
						<span className="prose">
							<PhoneIcon className="h-6 w-6 text-blue-500" />
						</span>
						<span>{contact.phone}</span>
                    </div> */}

					{/* <div className="ml-4 flex space-x-4">
						<span className="prose">
							<FaceSmileIcon className="h-6 w-6 text-blue-500" />
						</span>
						<span>{facebook.url}</span>
					</div>
		        			<div className="ml-4 flex space-x-4">
						<span>
							<GlobeAltIcon className="h-6 w-6 text-blue-500" />
						</span>
						<span>{contact.website}</span>
					</div>
					<div className="ml-4 flex space-x-4">
						<span>
							<MapPinIcon className="h-6 w-6 text-blue-500" />
						</span>
						<span className="w-3/4">{contactDetail.address}</span>
					</div> */}
				</div>
			</div>
		</div>
	);
};

const VisitingCard = () => {
	return (
		<div className="m-20">
			<VCard {...contactDetail} />
		</div>
	);
};

export default VisitingCard;
