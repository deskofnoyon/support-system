import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import dribble from "../../assets/dribble.svg";
import logo from "../../assets/logo.svg";
import FooterLink from "./footer-link";

const aboutUs = [
	{
		name: "Support Center",
		url: ""
	},
	{
		name: "Customer Support",
		url: ""
	},
	{
		name: "About Us",
		url: ""
	},
	{
		name: "Copyright",
		url: ""
	}
];

const ourInfo = [
	{ name: "Return Policy", url: "/return-policy" },
	{ name: "Privacy Policy", url: "/privacy-policy" },
	{ name: "Terms & Conditions", url: "/terms-and-conditions" },
	{ name: "Site Map", url: "/site-map" }
];

const myAccount = [
	{ name: "Press Inquiries", url: "/press-inquiries" },
	{ name: "Social Media", url: "/social-media" },
	{ name: "Directories", url: "/directories" },
	{ name: "Images & B-roll", url: "/images-and-broll" }
];

const contact = [
	{
		id: 1,
		name: "Facebook",
		url: "https://facebook.com",
		icon: facebook
	},
	{
		id: 2,
		name: "Twitter",
		url: "https://twitter.com",
		icon: twitter
	},
	{
		id: 3,
		name: "GitHub",
		url: "https://github.com",
		icon: github
	},
	{
		id: 4,
		name: "Gribble",
		url: "https://dribbile.com",
		icon: dribble
	},
];

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
						<p className="text-sm">Copyright by {new Date().getFullYear()} Redq, Inc</p>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">About US</h3>
						<ul className="space-y-2">
							{
								aboutUs.map((link, index) =>
									<FooterLink link={link} key={index} />
								)
							}
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">Our Information</h3>
						<ul className="space-y-2">
							{
								ourInfo.map((link, index) =>
									<FooterLink link={link} key={index} />
								)
							}
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">My Account</h3>
						<ul className="space-y-2">
							{
								myAccount.map((link, index) =>
									<FooterLink link={link} key={index} />
								)
							}
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-xl font-semibold">Connect</h3>
						<ul className="space-y-2">
							{
								contact.map((socialLink, index) =>
									<li key={index}>
										<a className="inline-flex space-x-3 hover:underline" href={socialLink.url}>
											<img src={socialLink.icon} alt={socialLink.name} />
											<span>{socialLink.name}</span>
										</a>
									</li>
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
