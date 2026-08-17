import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

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
			<div className='relative w-full h-[85vh] flex items-center justify-center'>
				<img 
					src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
					alt="Lifestyle Fashion" 
					className='absolute inset-0 w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-black/20'></div>
				<div className='relative z-10 text-center px-6 max-w-5xl mt-16'>
					<h1 className='text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-md leading-[0.85]'>
						Style That<br />Moves With You
					</h1>
					<p className='text-sm md:text-base text-white font-bold uppercase tracking-[0.2em] mt-8'>
						Discover the new collection
					</p>
				</div>
			</div>

			<div className='max-w-[1400px] mx-auto px-6 md:px-12 py-24'>
				<div className='mb-12 flex items-baseline justify-between'>
					<h2 className='text-3xl font-black tracking-tighter uppercase'>Shop Categories</h2>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
