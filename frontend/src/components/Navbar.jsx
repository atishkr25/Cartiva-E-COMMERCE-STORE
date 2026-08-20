import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-cartiva-bg/90 backdrop-blur-md z-40 transition-all duration-300 border-b border-cartiva-light-border/50'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex flex-wrap justify-between items-center'>
					<Link to='/' className='text-2xl font-black text-cartiva-text tracking-tighter items-center flex'>
						CARTIVA
					</Link>

					<nav className='flex flex-wrap items-center gap-8'>
						<Link
							to={"/"}
							className='nav-link text-[10px] uppercase tracking-widest font-bold text-cartiva-gray hover:text-cartiva-text transition-colors duration-300'
						>
							Home
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-cartiva-gray hover:text-cartiva-text transition-colors duration-300 flex items-center'
							>
								<ShoppingCart className='inline-block group-hover:text-cartiva-text transition-transform group-hover:scale-105' size={18} strokeWidth={2} />
								<span className='nav-link hidden sm:inline ml-1.5 text-[10px] uppercase tracking-widest font-bold'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-2.5 bg-cartiva-text text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='group text-cartiva-gray hover:text-cartiva-text transition-colors duration-300 flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1.5 transition-transform group-hover:scale-105' size={16} strokeWidth={2} />
								<span className='nav-link hidden sm:inline text-[10px] uppercase tracking-widest font-bold'>Admin</span>
							</Link>
						)}

						{user ? (
							<button
								className='group text-cartiva-gray hover:text-cartiva-text flex items-center transition-colors duration-300'
								onClick={logout}
							>
								<LogOut className='transition-transform group-hover:-translate-x-1' size={18} strokeWidth={2} />
								<span className='nav-link hidden sm:inline ml-1.5 text-[10px] uppercase tracking-widest font-bold'>Exit</span>
							</button>
						) : (
							<div className='flex items-center gap-5 ml-2'>
								<Link
									to={"/login"}
									className='group text-[10px] uppercase tracking-widest font-bold text-cartiva-gray hover:text-cartiva-text transition-colors duration-300 flex items-center'
								>
									<LogIn className='mr-1.5 transition-transform group-hover:translate-x-1' size={16} strokeWidth={2} />
									<span className='nav-link'>Login</span>
								</Link>
								<Link
									to={"/signup"}
									className='bg-cartiva-text hover:bg-black text-white py-2 px-5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center shadow-sm hover:shadow-md'
								>
									<UserPlus className='mr-1.5 hidden sm:inline' size={16} strokeWidth={2} />
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
