const features = [
	{
		name: "Welcome",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 2",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 3",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 4",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 5",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 6",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 7",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 8",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
	{
		name: "Welcome 9",
		description: "DEscription some more text Description some more text add over here to  and some more tet descpacito and the lemanito em parito",
		icon: "https://tailwindui.com/img/ecommerce/icons/icon-product-reviews-01.svg",
	},
];

const Feature = ({
	name,
	description,
}: {
	name: string;
	description: string;
}) => {
	return (
		<div className="  justify-around  flex flex-col items-center py-8  border-t-4 space-y-4 relative mb-14">
			<div className="size-20 bg-purple-500 rounded-2xl  border-8 border-purple-200 absolute -top-10 "></div>
			<h1 className="font-semibold text-3xl text-indigo-950">{name}</h1>
			<p className="text-center w-7/12">{description}</p>
		</div>
	);
};

const DesignTail3 = () => {
	return (
		<div className="h-screen  items-center flex ">
			<div className="grid grid-cols-3   w-full">
				{features.map((item, index) => (
					<Feature key={index}  {...item}  />
				))}
			</div>
		</div>
	);
};

export default DesignTail3;
