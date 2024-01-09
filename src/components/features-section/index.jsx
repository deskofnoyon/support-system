import SectionTitle from "../section-title";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import image4 from "../../assets/image-4.png";
import { HiChevronRight } from "react-icons/hi2";

export default function FeaturesSection() {
	return (
		<section className="py-14 bg-[#353448]">
			<div className="container">
				<SectionTitle
					text={"Ideal solutions for you"}
					heading={"Go beyond ultimate features"}
					color="white"
				/>

				<div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 ">
					<div className="w-full lg:max-w-xs space-y-4 lg:self-end">
						<figure className="rounded overflow-hidden">
							<img src={image1} alt="feature-image" />
						</figure>
						<h3 className="text-xl font-semibold text-white">
							Introducing our newest team with great experience
						</h3>
						<p className="text-gray-300">
							Brian Halligan knows that you need more than a great product to
							have a great brand.
						</p>
						<a
							href="#"
							className="inline-flex space-x-1 items-center text-white font-medium"
						>
							<span>Learn more</span>
							<HiChevronRight size={12} />
						</a>
					</div>

					<div className="w-full lg:max-w-md space-y-4">
						<figure className="rounded overflow-hidden">
							<img src={image2} alt="feature-image" />
						</figure>
						<h3 className="text-xl font-semibold text-white">
							New banking application has developed and we expecting good
							feedback
						</h3>
						<a
							href="#"
							className="inline-flex space-x-1 items-center text-white font-medium"
						>
							<span>Learn more</span>
							<HiChevronRight size={12} />
						</a>
					</div>

					<div className="flex flex-col space-y-5 lg:space-y-0 lg:justify-between">
						<div className="w-full lg:max-w-xs space-y-4">
							<figure className="rounded overflow-hidden">
								<img src={image3} alt="feature-image" />
							</figure>
							<h3 className="text-xl font-semibold text-white">
								Ui/UX industry are doing great job in previous year history
							</h3>
						</div>
						<div className="w-full lg:max-w-xs space-y-4">
							<figure className="rounded overflow-hidden">
								<img src={image4} alt="feature-image" />
							</figure>
							<h3 className="text-xl font-semibold text-white">
								Develop you design experience with figma features.
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
