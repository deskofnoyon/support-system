import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import dribble from "../../assets/dribble.svg";
import logo from "../../assets/logo.svg";

export default function Footer() {
	return (
		<footer className="pt-36 pb-10 bg-[#F9FAFC] -mt-40">
			<div className="container">
				<div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-x-6">
					<div className="space-y-3">
						<a href="#">
							<img src={logo} alt="logo" />
						</a>
						<div className="flex items-center space-x-2">
							<a href="#">Terms of use</a>
							<span>|</span>
							<a href="#">Privacy</a>
						</div>
						<p>Copyright by {new Date().getFullYear()} Redq, Inc</p>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">About US</h3>
						<ul className="space-y-2">
							<li>
								<a className="hover:underline" href="#">
									Support Center
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Customer Support
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									About Us
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Copyright
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">Our Information</h3>
						<ul className="space-y-2">
							<li>
								<a className="hover:underline" href="#">
									Return Policy
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Privacy Policy
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Site Map
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">My Account</h3>
						<ul className="space-y-2">
							<li>
								<a className="hover:underline" href="#">
									Press inquiries
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Social media
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Directories
								</a>
							</li>
							<li>
								<a className="hover:underline" href="#">
									Images & B-roll
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">Connect</h3>
						<ul className="space-y-2">
							<li>
								<a className="inline-flex space-x-3 hover:underline" href="#">
									<img src={facebook} alt="facebook" />
									<span>Facebook</span>
								</a>
							</li>
							<li>
								<a className="inline-flex space-x-3 hover:underline" href="#">
									<img src={twitter} alt="twitter" />
									<span>Twitter</span>
								</a>
							</li>
							<li>
								<a className="inline-flex space-x-3 hover:underline" href="#">
									<img src={github} alt="github" />
									<span>GitHub</span>
								</a>
							</li>
							<li>
								<a className="inline-flex space-x-3 hover:underline" href="#">
									<img src={dribble} alt="dribble" />
									<span>Dribble</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
