import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { motion } from "framer-motion";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-cartiva-text overflow-hidden bg-cartiva-bg'>
			{/* Hero Section */}
			<div className='relative w-full h-[90vh] flex items-center justify-center overflow-hidden'>
				<img 
					src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
					alt="Lifestyle Fashion" 
					className='absolute inset-0 w-full h-full object-cover object-top'
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60'></div>
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className='relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mt-16'
				>
					<h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase mb-6 leading-[0.9] drop-shadow-sm'>
						Define Your <br className="hidden md:block"/> Narrative
					</h1>
					<p className='text-xs md:text-sm text-white/90 font-medium uppercase tracking-[0.3em] mb-10 max-w-lg leading-relaxed'>
						Curated essentials for the modern minimalist. Discover pieces that speak for themselves.
					</p>
					<button className="group relative overflow-hidden bg-white text-black font-bold uppercase tracking-widest text-[10px] px-8 py-3.5 transition-transform duration-300 hover:scale-105 active:scale-95">
						<span className="relative z-10">Explore Collection</span>
						<div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</button>
				</motion.div>
			</div>

			<div className='container mx-auto px-4 py-24'>
				<div className='mb-16 text-center'>
					<h2 className='text-2xl md:text-3xl font-black tracking-tight uppercase mb-4'>Shop by Category</h2>
					<div className="w-12 h-0.5 bg-cartiva-text mx-auto"></div>
				</div>
				<motion.div 
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32'
				>
					{categories.map((category, index) => (
						<motion.div 
							key={category.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<CategoryItem category={category} />
						</motion.div>
					))}
				</motion.div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
