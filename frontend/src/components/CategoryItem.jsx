import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='group relative overflow-hidden bg-cartiva-bg aspect-[3/4]'>
			<Link to={"/category" + category.href} className="block w-full h-full">
				<img
					src={category.imageUrl}
					alt={category.name}
					className='w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105'
					loading='lazy'
				/>
				{/* Dark overlay that fades in on hover */}
				<div className='absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors duration-700' />
				
				<div className='absolute inset-0 flex flex-col justify-end p-6 z-20'>
					<h3 className='text-white text-3xl font-black uppercase tracking-tighter drop-shadow-sm transition-transform duration-500 group-hover:-translate-y-2'>{category.name}</h3>
					
					{/* Animated "Shop Now" with underline */}
					<div className="overflow-hidden">
						<p className='text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100'>
							<span className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-500 after:delay-300 group-hover:after:w-full">
								Shop Now
							</span>
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
