import React from "react";
import DealImg1 from "../assets/DealsOfTheDay-1.png";
import DealImg2 from "../assets/DealsOfTheDay-2.png";
import DealImg3 from "../assets/DealsOfTheDay-3.png";
import DealImg4 from "../assets/DealsOfTheDay-4.png";

const deals = [
	{
		title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
		brand: "NestFood",
		brandColor: "text-green-500",
		price: 32.85,
		oldPrice: 33.8,
		rating: 4.0,
		image: DealImg1,
	},
	{
		title: "Perdue Simply Smart Organics Gluten Free",
		brand: "Old El Paso",
		brandColor: "text-teal-500",
		price: 24.85,
		oldPrice: 26.8,
		rating: 4.0,
		image: DealImg2,
	},
	{
		title: "Signature Wood-Fired Mushroom and Caramelized",
		brand: "Progresso",
		brandColor: "text-green-400",
		price: 12.85,
		oldPrice: 13.8,
		rating: 3.0,
		image: DealImg3,
	},
	{
		title: "Simply Lemonade with Raspberry Juice",
		brand: "Yoplait",
		brandColor: "text-blue-400",
		price: 15.85,
		oldPrice: 16.8,
		rating: 3.0,
		image: DealImg4,
	},
];

export default function DealsOfTheDay() {
	return (
		<section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-10">
			<div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
					Deals Of The Day
				</h2>
				<a
					href="#"
					className="text-gray-500 hover:text-gray-700 text-sm font-sm"
				>
					All Deals &gt;
				</a>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{deals.map((deal, i) => (
					<div
						key={i}
						className="relative flex flex-col items-center w-full"
					>
						{/* Product Image */}
						<div className="rounded-2xl overflow-hidden shadow-lg bg-white w-full max-w-xs mx-auto">
							<img
								src={deal.image}
								alt={deal.title}
								className="w-full h-full object-cover"
							/>
						</div>
						{/* Details Card */}
						<div
							className="relative -mt-16 w-full max-w-[90%] mx-auto bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between"
							style={{
								minHeight: 180,
							}}
						>
							<div>
								<div
									className="mb-2 font-semibold text-base sm:text-lg text-gray-800 leading-snug"
									style={{
										fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
									}}
								>
									{deal.title}
								</div>
								<div className="flex items-center mb-2">
									<span className="text-yellow-400 mr-1 text-lg">
										&#9733;
									</span>
									<span className="text-gray-400 font-medium text-sm mr-2">
										({deal.rating})
									</span>
								</div>
								<div className="mb-3 text-sm">
									<span className="text-gray-400 font-medium">By </span>
									<span className={`${deal.brandColor} font-semibold`}>
										{deal.brand}
									</span>
								</div>
							</div>
							<div className="flex items-center w-full justify-between mt-2">
								<div>
									<span
										className="text-green-500 font-bold text-sm sm:text-xl mr-2 lg:text-sm"
										style={{
											fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
										}}
									>
										${deal.price.toFixed(2)}
									</span>
									<span
										className="text-gray-400 line-through font-medium text-sm"
										style={{
											fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
										}}
									>
										${deal.oldPrice}
									</span>
								</div>
								<button
									className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition justify-center px-1.5 py-1.5 text-sm sm:text-base ml-2"
									style={{
										fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
									}}
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9" />
									</svg>
									Add
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
