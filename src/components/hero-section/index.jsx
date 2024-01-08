import heroImage from "../../assets/hero-image.svg";
import { HiChevronRight } from "react-icons/hi2";

export default function HeroSection() {
	return (
		<section className="bg-[#fefbf7] py-5">
			<div className="container flex flex-col space-y-5 lg:flex-row lg:items-center lg:justify-between lg:my-20">
				<div className="space-y-3 lg:max-w-xl">
					<a
						href="#"
						className="border rounded-[25px] shadow-sm inline-flex items-center space-x-3 p-1"
					>
						<button className="btn px-3 py-1 rounded-[25px] text-sm">
							News
						</button>
						<div className="flex space-x-1 items-center pr-2">
							<span className="text-xs lg:text-sm">
								We have updated our term & condition policy
							</span>
							<HiChevronRight size={12} />
						</div>
					</a>
					<div className="space-y-4">
						<h1 className="text-4xl leading-10 font-bold lg:text-5xl lg:leading-tight">
							Engage your website visitors using support management tools
						</h1>
						<p className="leading-7 lg:leading-8 max-w-lg">
							Explore 50+ integrations that make your day-to-day workflow more
							efficient and familiar. Our extensive developer tools might also
							strike your fancy website.
						</p>
						<div className="flex space-x-3">
							<a href="#" className="btn">
								Try free trial
							</a>
							<a
								href="#"
								className="btn bg-transparent text-black bg-white shadow"
							>
								Discover in video
							</a>
						</div>
					</div>
				</div>
				<figure className="p-8 lg:p-0 lg:max-w-xl">
					<img src={heroImage} alt="hero-image" />
				</figure>
			</div>
		</section>
	);
}
