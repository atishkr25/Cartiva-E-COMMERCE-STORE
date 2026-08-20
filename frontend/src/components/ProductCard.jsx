import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};

	return (
		<div className='group flex w-full relative flex-col overflow-hidden bg-cartiva-bg'>
			<div className='relative w-full aspect-[4/5] overflow-hidden bg-gray-100'>
				<img 
					className='object-cover w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-105' 
					src={product.image} 
					alt={product.name} 
					loading="lazy"
				/>
				<div className='absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
				
				{/* Minimal Add to Cart button overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
					<button
						className='w-full flex items-center justify-center bg-cartiva-text text-white py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-colors duration-300 shadow-md'
						onClick={handleAddToCart}
					>
						<ShoppingCart size={16} className='mr-2' strokeWidth={2} />
						Add to cart
					</button>
				</div>
			</div>

			<div className='pt-4 pb-2 px-1 flex flex-col items-center text-center'>
				<h5 className='text-sm font-bold tracking-tight text-cartiva-text uppercase mb-1'>{product.name}</h5>
				<p className='text-sm text-cartiva-gray font-medium'>
					${product.price}
				</p>
			</div>
		</div>
	);
};
export default ProductCard;
