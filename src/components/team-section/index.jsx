import teamImage from "../../assets/team.png";
import arrow from "../../assets/arrow.svg";
import blink from "../../assets/blink.svg";

export default function TeamSection() {
	return (
		<section className="py-14">
			<div className="container">
				<div className="text-center space-y-3 flex flex-col items-center">
					<h2 className="text-2xl lg:text-3xl font-semibold lg:max-w-xl">
						Meet our amazing super heroes who always work hardly behind the
						scenes
					</h2>
					<p className="leading-7 lg:max-w-xl">
						Focus only on the meaning, we take care of the design. As soon as
						the meeting end you can export in one click into your preferred.
					</p>
				</div>
				<div>
					<img
						className="w-full lg:max-w-4xl lg:mx-auto"
						src={teamImage}
						alt="team-image"
					/>
					<div className="relative bg-[#183656] flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center p-5 rounded-[10px] lg:p-14">
						<h2 className="text-xl text-center font-semibold text-white lg:text-3xl lg:text-left lg:max-w-[450px]">
							Do you have any question? Feel free to contact us
						</h2>
						<img
							className="hidden lg:inline-block lg:max-w-[220px]"
							src={arrow}
							alt="arrow-image"
						/>
						<button className="z-10 btn text-sm lg:text-base bg-white text-[#183656] lg:px-5">
							Contact Us Now
						</button>
						<img
							className="hidden lg:inline-block lg:absolute lg:right-[100px]"
							src={blink}
							alt="blink-image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
