import videoCallImage from "../../assets/video-call.png";
import { HiChevronRight } from "react-icons/hi2";
export default function VideoCallSection() {
	return (
		<section className="py-14">
			<div className="container space-y-5">
				<div className="text-center space-y-3 flex flex-col items-center">
					<h2 className="text-2xl lg:text-3xl font-semibold">
						Introducing video calling support
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
					<img src={videoCallImage} alt="video-call-image" />
				</figure>
			</div>
		</section>
	);
}
