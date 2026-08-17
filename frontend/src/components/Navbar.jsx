import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-cartiva-bg bg-opacity-95 backdrop-blur-md z-40 transition-all duration-300 border-b border-cartiva-light-border'>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex flex-wrap justify-between items-center'>
					<Link to='/' className='text-2xl font-black text-cartiva-text tracking-tighter items-center flex'>
						Cartiva
					</Link>

					<nav className='flex flex-wrap items-center gap-6'>
						<Link
							to={"/"}
							className='text-xs uppercase tracking-widest font-semibold text-cartiva-gray hover:text-cartiva-text transition duration-300 ease-in-out'
						>
							Home
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-cartiva-gray hover:text-cartiva-text transition duration-300 ease-in-out flex items-center'
							>
								<ShoppingCart className='inline-block group-hover:text-cartiva-text' size={18} strokeWidth={2.5} />
								<span className='hidden sm:inline ml-1 text-xs uppercase tracking-widest font-semibold'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-3 bg-cartiva-text text-white rounded-full px-1.5 py-0.5 text-[10px] font-bold group-hover:bg-cartiva-accent transition duration-300 ease-in-out'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='text-cartiva-gray hover:text-cartiva-text px-2 py-1 transition duration-300 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={16} strokeWidth={2.5} />
								<span className='hidden sm:inline text-xs uppercase tracking-widest font-semibold'>Admin</span>
							</Link>
						)}

						{user ? (
							<button
								className='text-cartiva-gray hover:text-cartiva-text flex items-center transition duration-300 ease-in-out'
								onClick={logout}
							>
								<LogOut size={18} strokeWidth={2.5} />
								<span className='hidden sm:inline ml-1 text-xs uppercase tracking-widest font-semibold'>Exit</span>
							</button>
						) : (
							<div className='flex items-center gap-4 ml-2'>
								<Link
									to={"/login"}
									className='text-xs uppercase tracking-widest font-semibold text-cartiva-gray hover:text-cartiva-text transition duration-300 ease-in-out flex items-center'
								>
									<LogIn className='mr-1' size={16} strokeWidth={2.5} />
									Login
								</Link>
								<Link
									to={"/signup"}
									className='bg-black hover:bg-cartiva-gray text-white py-2 px-4 rounded text-xs uppercase tracking-widest font-bold transition duration-300 ease-in-out flex items-center'
								>
									<UserPlus className='mr-1 hidden sm:inline' size={16} strokeWidth={2.5} />
									Sign Up
								</Link>
							</div>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
