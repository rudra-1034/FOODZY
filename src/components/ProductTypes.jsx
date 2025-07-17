import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const categories = [
	{
		title: "Top Selling",
		products: [
			{ 
				image: img1 , 
				name: "Nestle Original Coffee-Mate Coffee Creamer", 
				price: 32.85, 
				oldPrice: 33.8, 
				rating: 4.0 
			},
			{ 
				image: img2 , 
				name: "Nestle Original Coffee-Mate Coffee Creamer", 
				price: 32.85, 
				oldPrice: 33.8, 
				rating: 4.0 
			},
			{ 
				image: img3 , 
				name: "Nestle Original Coffee-Mate Coffee Creamer", 
				price: 32.85, 
				oldPrice: 33.8, 
				rating: 4.0 
			},
		],
	},
	{
		title: "Trending Products",
		products: [
			{ image: img1, name: "Organic Cage-Free Grade A Large Brown Eggs", price: 32.85, oldPrice: 33.8, rating: 4.0 },
			{ image: img2, name: "Seeds of Change Organic Quinoa, Brown, & Red Rice", price: 32.85, oldPrice: 33.8, rating: 4.0 },
			{ image: img3, name: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee", price: 32.85, oldPrice: 33.8, rating: 4.0 },
		],
	},
	{
		title: "Recently added",
		products: [
			{ image: img1, name: "Pepperidge Farm Farmhouse Hearty White Bread", price: 32.85, oldPrice: 33.8, rating: 4.0 },
			{ image: img2, name: "Organic Frozen Triple Berry Blend", price: 32.85, oldPrice: 33.8, rating: 4.0 },
			{ image: img3, name: "Oroweat Country Buttermilk Bread", price: 32.85, oldPrice: 33.8, rating: 4.0 },
		],
	},
	{
		title: "Top Rated",
		products: [
			{ image: img1, name: "Foster Farms Takeout Crispy Classic Buffalo Wings", price: 32.85, oldPrice: 33.8, rating: 4.0 },
			{ image: img2, name: "Angie's Boomchickapop Sweet & Salty Kettle Corn", price: 32.85, oldPrice: 33.8, rating: 4.0 },
			{ image: img3, name: "All Natural Italian-Style Chicken Meatballs", price: 32.85, oldPrice: 33.8, rating: 4.0 },
		],
	},
];

export default function ProductTypes() {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-6">
			{/* Mobile: Single column, Tablet: 2 columns, Desktop: 4 columns */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
				{categories.map((category, idx) => (
					<div key={category.title} className="w-full">
						{/* Category Header */}
						<div className="mb-6">
							<h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
								{category.title}
							</h3>
							<div className="h-1 w-16 sm:w-20 bg-green-200 rounded"></div>
						</div>
						
						{/* Products List */}
						<div className="space-y-4 sm:space-y-6">
							{category.products.map((product, i) => (
								<div key={i} className="flex items-start gap-3 sm:gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
									{/* Product Image */}
									<div className="flex-shrink-0 bg-gray-100 rounded-xl flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 overflow-hidden">
										{product.image ? (
											<img 
												src={product.image} 
												alt={product.name} 
												className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
											/>
										) : (
											<div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
												{/* Empty space for manual image addition */}
											</div>
										)}
									</div>
									
									{/* Product Details */}
									<div className="flex-1 min-w-0">
										{/* Product Name */}
										<h4 className="font-medium text-sm sm:text-base text-gray-800 leading-tight mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
											{product.name}
										</h4>
										
										{/* Rating */}
										<div className="flex items-center mb-2">
											<div className="flex">
												{[...Array(5)].map((_, starIdx) => (
													<span 
														key={starIdx} 
														className={`text-xs ${starIdx < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
													>
														★
													</span>
												))}
											</div>
											<span className="text-gray-400 text-xs ml-1">({product.rating})</span>
										</div>
										
										{/* Price */}
										<div className="flex items-center gap-2">
											<span className="text-green-600 font-bold text-sm sm:text-base">
												${product.price.toFixed(2)}
											</span>
											<span className="text-gray-400 line-through text-xs sm:text-sm">
												${product.oldPrice.toFixed(2)}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}