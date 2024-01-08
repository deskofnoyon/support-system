import SectionTitle from "../section-title";
import PricePlanCard from "./price-plan-card";

const pricingList = [
	{
		id: 1,
		packageName: "Starter Pack",
		price: 18.99,
		trialValidation: 15,
		packageFacilates: {
			fullAccessLibrary: true,
			multipleUser: true,
			refundPolicy: false,
			googleAnalytics: false,
			alldaySupport: false,
		},
	},
	{
		id: 2,
		packageName: "Premium Pack",
		price: 29.99,
		trialValidation: 30,
		packageFacilates: {
			fullAccessLibrary: true,
			multipleUser: true,
			refundPolicy: true,
			googleAnalytics: true,
			alldaySupport: false,
		},
		recommended: true,
	},
	{
		id: 3,
		packageName: "Custom Pack",
		price: 23.99,
		trialValidation: 30,
		packageFacilates: {
			fullAccessLibrary: true,
			multipleUser: true,
			refundPolicy: true,
			googleAnalytics: true,
			alldaySupport: false,
		},
	},
	{
		id: 4,
		packageName: "Ultimate Pack",
		price: 35.99,
		trialValidation: 45,
		packageFacilates: {
			fullAccessLibrary: true,
			multipleUser: true,
			refundPolicy: true,
			googleAnalytics: true,
			alldaySupport: true,
		},
	},
];

const facilities = [
	{
		id: 1,
		name: "Full Access Library",
	},
	{
		id: 2,
		name: "Multiple user",
	},
	{
		id: 3,
		name: "Refund Policy",
	},
	{
		id: 4,
		name: "Google Analytics",
	},
	{
		id: 5,
		name: "24/7 support",
	},
];

export default function PriceSection() {
	return (
		<section className="py-14">
			<div className="container">
				<SectionTitle
					heading={"Meet our pricing plan that suit you"}
					text={"Deal for your business"}
				/>
				<div className="w-full inline-flex mt-20">
					<ul className="hidden lg:block lg:w-full lg:basis-[25%] lg:mt-[164px] rounded-md">
						{facilities.map((fn) => (
							<li className="border-b pl-5 h-[40px] w-full leading-[40px]" key={fn.id}>
								{fn.name}
							</li>
						))}
					</ul>
					<div className="w-full grid grid-cols-1 gap-y-8 px-2 lg:px-0 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-2">
						{pricingList.map((plan) => (
							<PricePlanCard plan={plan} key={plan.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
