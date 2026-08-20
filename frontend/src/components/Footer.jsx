import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-cartiva-bg text-cartiva-text pt-24 pb-8 mt-auto w-full border-t border-cartiva-light-border/50">
			<div className="container mx-auto px-4">
				{/* Top Section */}
				<div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16 lg:gap-12">
					{/* Newsletter */}
					<div className="w-full lg:w-1/3 max-w-md">
						<h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">The List</h3>
						<p className="text-xs text-cartiva-gray mb-8 leading-relaxed font-medium">
							Join our private newsletter for early access to new releases, editorial content, and exclusive offers.
						</p>
						<form className="flex items-center border-b border-cartiva-light-border hover:border-cartiva-text focus-within:border-cartiva-text transition-colors duration-300 pb-2">
							<input 
								type="email" 
								placeholder="Email Address" 
								className="bg-transparent focus:outline-none w-full text-xs font-medium placeholder-cartiva-gray/60"
								required
							/>
							<button type="submit" className="ml-4 hover:text-cartiva-gray transition-colors">
								<ArrowRight size={18} strokeWidth={1.5} />
							</button>
						</form>
					</div>

					{/* Links Columns */}
					<div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
						<div>
							<h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-cartiva-text">Shop</h4>
							<ul className="space-y-4 text-xs text-cartiva-gray font-medium">
								<li><Link to="/category/jeans" className="hover:text-cartiva-text transition-colors duration-300">Jeans</Link></li>
								<li><Link to="/category/t-shirts" className="hover:text-cartiva-text transition-colors duration-300">T-Shirts</Link></li>
								<li><Link to="/category/shoes" className="hover:text-cartiva-text transition-colors duration-300">Shoes</Link></li>
								<li><Link to="/category/glasses" className="hover:text-cartiva-text transition-colors duration-300">Glasses</Link></li>
								<li><Link to="/category/jackets" className="hover:text-cartiva-text transition-colors duration-300">Jackets</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-cartiva-text">About</h4>
							<ul className="space-y-4 text-xs text-cartiva-gray font-medium">
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Our Story</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Press</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Careers</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Contact</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Stores</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-cartiva-text">Support</h4>
							<ul className="space-y-4 text-xs text-cartiva-gray font-medium">
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">FAQ</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Shipping & Returns</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Warranty</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Track Order</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-cartiva-text">Social</h4>
							<ul className="space-y-4 text-xs text-cartiva-gray font-medium">
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">Instagram</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">TikTok</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">YouTube</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">Twitter</a></li>
							</ul>
						</div>
					</div>
				</div>

				{/* Brand Name */}
				<div className="flex justify-center items-center w-full mb-16 overflow-hidden">
					<h1 className="text-[12vw] sm:text-[10vw] leading-none font-black tracking-tighter text-cartiva-text/10 select-none text-center">
						CARTIVA
					</h1>
				</div>

				{/* Bottom Legal */}
				<div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-cartiva-gray uppercase tracking-widest">
					<p>© {new Date().getFullYear()} Cartiva Studios.</p>
					<div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
						<Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Privacy Policy</Link>
						<Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Terms</Link>
						<Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Accessibility</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
