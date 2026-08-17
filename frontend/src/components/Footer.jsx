import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-cartiva-bg text-cartiva-text pt-16 pb-8 border-t border-cartiva-light-border mt-auto w-full">
			<div className="container mx-auto px-4 max-w-7xl">
				{/* Top Section: Newsletter & Brief */}
				<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
					<div className="w-full md:w-1/3">
						<h3 className="text-xl font-bold tracking-tight mb-3">Stay connected with Cartiva</h3>
						<p className="text-sm text-cartiva-gray mb-6">
							We'll send you updates on our latest launches and more. Need to take off? Unsubscribe at any time.
						</p>
						<form className="flex items-center border-b border-cartiva-text pb-2">
							<input 
								type="email" 
								placeholder="Email Address" 
								className="bg-transparent focus:outline-none w-full text-sm placeholder-cartiva-gray"
								required
							/>
							<button type="submit" className="ml-2 hover:text-cartiva-accent transition-colors">
								<ArrowRight size={18} strokeWidth={2} />
							</button>
						</form>
					</div>

					{/* Links Columns */}
					<div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
						<div>
							<h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Shop</h4>
							<ul className="space-y-3 text-cartiva-gray">
								<li><Link to="/category/jeans" className="hover:text-cartiva-text transition">Jeans</Link></li>
								<li><Link to="/category/t-shirts" className="hover:text-cartiva-text transition">T-Shirts</Link></li>
								<li><Link to="/category/shoes" className="hover:text-cartiva-text transition">Shoes</Link></li>
								<li><Link to="/category/glasses" className="hover:text-cartiva-text transition">Glasses</Link></li>
								<li><Link to="/category/jackets" className="hover:text-cartiva-text transition">Jackets</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-4 uppercase text-xs tracking-widest">About</h4>
							<ul className="space-y-3 text-cartiva-gray">
								<li><Link to="#" className="hover:text-cartiva-text transition">Our Story</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Press</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Careers</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Contact Us</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Stores</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Support</h4>
							<ul className="space-y-3 text-cartiva-gray">
								<li><Link to="#" className="hover:text-cartiva-text transition">FAQ</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Shipping & Returns</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Warranty</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Track Order</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Explore</h4>
							<ul className="space-y-3 text-cartiva-gray">
								<li><Link to="#" className="hover:text-cartiva-text transition">Discover</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Journal</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition">Ambassador</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Social</h4>
							<ul className="space-y-3 text-cartiva-gray">
								<li><a href="#" className="hover:text-cartiva-text transition">Instagram</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition">TikTok</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition">YouTube</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition">Twitter</a></li>
							</ul>
						</div>
					</div>
				</div>

				{/* Giant Brand Name */}
				<div className="flex justify-center items-center w-full my-8 lg:my-16 overflow-hidden">
					<h1 className="text-[16vw] lg:text-[18vw] leading-[0.8] font-black tracking-tighter text-cartiva-text select-none text-center">
						Cartiva
					</h1>
				</div>

				{/* Bottom Legal */}
				<div className="flex flex-col md:flex-row justify-between items-center text-xs text-cartiva-gray border-t border-cartiva-light-border pt-6 pb-4">
					<p>Cartiva © {new Date().getFullYear()}</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link to="#" className="hover:text-cartiva-text transition">Privacy Policy</Link>
						<Link to="#" className="hover:text-cartiva-text transition">Terms & Conditions</Link>
						<Link to="#" className="hover:text-cartiva-text transition">Accessibility</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
