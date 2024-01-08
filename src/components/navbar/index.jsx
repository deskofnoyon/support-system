import { useState } from "react";
import logo from "../../assets/logo.svg";
import { HiMiniBars2, HiXMark } from "react-icons/hi2";
import ListItem from "./list-item";

const menuLinks = [
	{ name: "Home", url: "#" },
	{ name: "Categories", url: "#" },
	{ name: "Contact", url: "#" },
	{ name: "About us", url: "#" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<header className="bg-[#fefbf7] sticky top-0 z-10">
			<nav className="flex items-center justify-between container py-2 px-2 lg:px-12">
				<a href="#">
					<img src={logo} alt="logo-image" />
				</a>
				<ul
					className={`flex flex-col absolute left-0 w-full md:px-10 lg:px-0 lg:flex-row lg:static lg:w-auto lg:space-x-1 ${
						open ? "top-16" : "-top-64"
					}`}
				>
					{menuLinks.map((menu, index) => (
						<ListItem menu={menu} key={index} />
					))}
				</ul>
				<button className="hidden lg:btn">Parchase Now</button>
				<button
					onClick={() => setOpen(!open)}
					className="bg-slate-50 p-[7px] rounded border border-primary/60 lg:hidden active:scale-95 duration-200"
				>
					{!open ? <HiMiniBars2 size={28} /> : <HiXMark size={28} />}
				</button>
			</nav>
		</header>
	);
}
