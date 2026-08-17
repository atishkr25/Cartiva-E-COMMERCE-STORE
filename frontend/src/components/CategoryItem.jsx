import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='group relative overflow-hidden bg-white aspect-[3/4]'>
			<Link to={"/category" + category.href} className="block w-full h-full">
				<img
					src={category.imageUrl}
					alt={category.name}
					className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
					loading='lazy'
				/>
				<div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500' />
				<div className='absolute bottom-6 left-6 right-6 z-20'>
					<h3 className='text-white text-2xl font-bold uppercase tracking-tight drop-shadow-md'>{category.name}</h3>
					<p className='text-white/90 text-xs font-semibold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md'>Shop Now</p>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
