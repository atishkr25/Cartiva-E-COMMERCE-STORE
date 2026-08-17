import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-cartiva-bg text-cartiva-text pt-20 pb-6 border-t border-cartiva-light-border mt-auto w-full">
			<div className="max-w-[1400px] mx-auto px-6 md:px-12">
				{/* Top Section */}
				<div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16 lg:gap-8">
					{/* Newsletter */}
					<div className="w-full lg:w-1/3 max-w-sm">
						<h3 className="text-2xl font-bold tracking-tight mb-4">Stay connected with Cartiva</h3>
						<p className="text-sm text-cartiva-gray mb-8 leading-relaxed">
							We'll send you updates on our latest launches and more. Need to take off? Unsubscribe at any time.
						</p>
						<form className="flex items-center border-b border-cartiva-text/30 hover:border-cartiva-text transition-colors pb-3">
							<input 
								type="email" 
								placeholder="Email Address" 
								className="bg-transparent focus:outline-none w-full text-sm placeholder-cartiva-gray/70"
								required
							/>
							<button type="submit" className="ml-4 hover:text-cartiva-accent transition-colors">
								<ArrowRight size={20} strokeWidth={1.5} />
							</button>
						</form>
					</div>

					{/* Links Columns */}
					<div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 text-sm">
						<div>
							<h4 className="font-bold mb-6 uppercase text-[11px] tracking-[0.2em] text-cartiva-text">Shop</h4>
							<ul className="space-y-4 text-cartiva-gray font-medium">
								<li><Link to="/category/jeans" className="hover:text-cartiva-text transition-colors duration-300">Jeans</Link></li>
								<li><Link to="/category/t-shirts" className="hover:text-cartiva-text transition-colors duration-300">T-Shirts</Link></li>
								<li><Link to="/category/shoes" className="hover:text-cartiva-text transition-colors duration-300">Shoes</Link></li>
								<li><Link to="/category/glasses" className="hover:text-cartiva-text transition-colors duration-300">Glasses</Link></li>
								<li><Link to="/category/jackets" className="hover:text-cartiva-text transition-colors duration-300">Jackets</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-6 uppercase text-[11px] tracking-[0.2em] text-cartiva-text">About</h4>
							<ul className="space-y-4 text-cartiva-gray font-medium">
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Our Story</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Press</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Careers</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Contact Us</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Stores</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-6 uppercase text-[11px] tracking-[0.2em] text-cartiva-text">Support</h4>
							<ul className="space-y-4 text-cartiva-gray font-medium">
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">FAQ</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Shipping & Returns</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Warranty</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Track Order</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-6 uppercase text-[11px] tracking-[0.2em] text-cartiva-text">Explore</h4>
							<ul className="space-y-4 text-cartiva-gray font-medium">
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Discover</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Journal</Link></li>
								<li><Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Ambassador</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold mb-6 uppercase text-[11px] tracking-[0.2em] text-cartiva-text">Social</h4>
							<ul className="space-y-4 text-cartiva-gray font-medium">
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">Instagram</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">TikTok</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">YouTube</a></li>
								<li><a href="#" className="hover:text-cartiva-text transition-colors duration-300">Twitter</a></li>
							</ul>
						</div>
					</div>
				</div>

				{/* Giant Brand Name */}
				<div className="flex justify-center items-center w-full mb-10 overflow-hidden">
					<h1 className="text-[20vw] leading-[0.75] font-black tracking-tighter text-cartiva-text select-none text-center">
						Cartiva
					</h1>
				</div>

				{/* Bottom Legal */}
				<div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-cartiva-gray border-t border-cartiva-light-border pt-6 uppercase tracking-wider">
					<p>Cartiva © {new Date().getFullYear()}</p>
					<div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
						<Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Privacy Policy</Link>
						<Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Terms & Conditions</Link>
						<Link to="#" className="hover:text-cartiva-text transition-colors duration-300">Accessibility</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
