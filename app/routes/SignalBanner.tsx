import { useState } from "react";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";

type signDataType = {
	tailcolor: string;
	urdutext: string;
	engtext: string;
	icon?: string | null;
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
		icon: "test",
	},

];

// variant is default left   however user can pass right as well
const Sign = ({
	signData,
	variant,
}: {
	signData: signDataType;
	variant: string;
}) => {
	//  if variant is right then the logo will be on right side

	return (
		<div className={cn("h-1/2 flex flex-col  p-2 py-4 gap-5 ", signData.tailcolor)}		>
			
			<div 	className={cn("flex  items-top relative justify-between ",		variant === "right" ? "flex-row-reverse" : "flex-row"		)}		>
				
				{signData.icon ? <div id="logo" className="size-8 "></div> : <div id="logo" className="size-8 invisible"></div>}
				{/* <div id="logo" className="  invisible size-8"></div> */}

				<div
					className={cn(
						"flex flex-col  ",
						variant === "right" ? "text-left" : "text-right"
					)}
				>
					<h1 className="font-bold text-4xl   ">{signData.urdutext}</h1>
					<h1 className="text-3xl font-bold ">{signData.engtext}</h1>
				</div>
					

			</div>
		</div>
	);
};

const SignalSidebar = ({ variant }: { variant: string }) => {
	return (
		<div
			id="signboard"
			className={cn(
				"flex w-[700px] h-[350px]   border-8 border-solid border-white  justify-center text-white",
				variant === "right" ? "flex-row-reverse" : "flex-row"
			)}
		>
			<div className="w-4/12  bg-amber-500 items-center justify-center flex">
				<div className="size-24 bg-slate-500"></div>
			</div>
			<div className="w-8/12 flex flex-col   ">
				{signDataCollection.map((item, index) => (
					<Sign key={index} signData={item} variant={variant} />
				))}
			</div>
		</div>
	);
};

const SignalBanner = () => {
	// use state for left and right
	const [direction, setDirection] = useState("left");

	return (
		<div className="w-full items-center flex justify-center bg-slate-500 p-5 flex-col gap-2">
			<SignalSidebar variant={direction} />
			
			<div className="flex items-center space-x-2 w-44">
				<Switch id="direction" onCheckedChange={()=>setDirection(direction==="left"?"right":"left")} />
				<Label htmlFor="direction" className="text-4xl text-white">{direction}</Label>
			</div>
		</div>
	);
};

export default SignalBanner;
