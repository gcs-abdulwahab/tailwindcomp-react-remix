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
	);
};

const features = () => {
	return (
		<>
			<h1 className="text4xl font-bold">Features</h1>
			<p>
				Change, add, and remove items as you like. If you're having problems
				editing this website template, then don't hesitate to ask for help on
				the Forums.
			</p>

			<FeatureItem />
			<FeatureItem />
			<FeatureItem />
		</>
	);
};

export default features;
