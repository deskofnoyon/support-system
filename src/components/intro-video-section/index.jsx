import { HiChevronRight } from "react-icons/hi2";
import introVideoImage from "../../assets/social-intro.png";
export default function IntroVideoSection() {
	return (
		<section className="py-14">
			<div className="container">
				<div className="text-center space-y-3 flex flex-col items-center">
					<h2 className="text-2xl lg:text-3xl font-semibold">
						Agencies who also worked us
					</h2>
					<p className="leading-7 lg:max-w-xl">
						Every email, web page, and social media post makes an impression on
						your customers. With our software you can be confident it&apos;s
						impression.
					</p>
					<a
						href="#"
						className="inline-flex space-x-1 items-center text-blue-400"
					>
						<span>Explore Details</span>
						<HiChevronRight size={12} />
					</a>
				</div>
				<figure>
					<img src={introVideoImage} alt="intro-video-image" />
				</figure>
			</div>
		</section>
	);
}
