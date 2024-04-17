import { cn } from "~/lib/utils";

type signDataType = {
	tailcolor: string;
	urdutext: string;
	engtext: string;
};

const signDataCollection: signDataType[] = [
	{
		tailcolor: "bg-sky-600",
		urdutext: "Multan Road Urdu",
		engtext: "Multan Road",
	},
	{
		tailcolor: "bg-teal-600",
		urdutext: "Bheke  Urdu",
		engtext: "Bheke wala Road",
	},

];

// variant is default left   however user can pass right as well  
const Sign = ({ signData }: { signData: signDataType}) => {

    //  if variant is right then the logo will be on right side

	return (
		<div
			className={cn(
				"h-1/2 flex flex-col justify-end p-2 py-4 gap-5 ",
				signData.tailcolor
			)}
		>
			<div className="flex justify-between">
				<div id="logo" className="size-24"></div>
				<div className="flex flex-col">
					<h1 className="font-bold text-right  text-4xl ">{signData.urdutext}</h1>
					<h1 className="text-3xl font-bold text-right ">{signData.engtext}</h1>
				</div>
			</div>
		</div>
	);
};

const SignalSidebar = ( {variant}:{variant:string}) => {
	return (
		<div className=" flex w-[700px]    border-8 border-solid border-white  justify-center text-white">
			<div className="w-4/12  bg-amber-500 items-center justify-center flex">
                <div className="size-24 bg-slate-500">{ variant}</div>
			</div>
			<div className="w-8/12 flex flex-col ">
				{signDataCollection.map((item, index) => (
					<Sign key={index} signData={item}  />
				))}
			</div>
		</div>
	);
};

const SignalBanner = () => {
	return (
		<div className="w-full items-center flex justify-center bg-slate-500">
			<SignalSidebar variant="right" />
		</div>
	);
};

export default SignalBanner;
