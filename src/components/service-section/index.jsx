import SectionTitle from "../section-title";
import people from "../../assets/people.svg";
import peopleGroup from "../../assets/people-group.svg";
import support from "../../assets/support.svg";
import ServiceCard from "./service-card";

const services = [
	{
		id: 1,
		icon: people,
		name: "Simlify communications",
		body: "Get your info tests delivered at home collect a sample from the your pogress tests.",
	},
	{
		id: 2,
		icon: peopleGroup,
		name: "Quick Responce",
		body: "Get your info tests delivered at home collect a sample from the your pogress tests.",
	},
	{
		id: 3,
		icon: support,
		name: "Ultimate Org Support",
		body: "Get your info tests delivered at home collect a sample from the your pogress tests.",
	},
];

export default function ServiceSection() {
	return (
		<section className="py-14">
			<div className="container">
				<SectionTitle
					heading={"Go beyond ultimate features"}
					text={"Ideal solutions for you"}
				/>
				<div className="flex flex-col gap-y-7 lg:flex-row lg:gap-x-7                                 ">
					{services.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}
