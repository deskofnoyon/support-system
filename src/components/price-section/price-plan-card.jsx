import check from "../../assets/check.svg";
import cross from "../../assets/cross.svg";

const PricePlanCard = ({ plan }) => (
	<div className="relative">
		{plan.recommended && (
			<div className="p-3 uppercase bg-[#52ACFF] text-white rounded-t-md text-center absolute -top-[48px] left-0 w-full">
				Recommended
			</div>
		)}

		<div
			className={`bg-white text-center space-y-5  border duration-200 hover:shadow-md ${
				!plan.recommended ? "rounded-md" : "rounded-b-md"
			}`}
		>
			<div className="py-8 px-3 space-y-4">
				<h3 className="text-xl font-medium text-gray-400">
					{plan.packageName}
				</h3>
				<h1 className="text-3xl font-bold">
					<span>{plan.price}/</span>
					<span className="text-sm">per mo</span>
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center">
				{Object.keys(plan.packageFacilates).map((fc, index) => (
					<div
						className="py-3 border-b w-full flex space-x-3 justify-center items-center lg:space-x-0"
						key={index}
					>
						<span className="lg:hidden">{fc}</span>
						<img
							src={plan.packageFacilates[fc] ? check : cross}
							alt="facilaty-mark"
						/>
					</div>
				))}
			</div>
			<div className="py-10 px-3 space-y-4">
				<button className="btn bg-transparent text-primary border-primary border hover:bg-primary hover:text-white">
					Choose Plan
				</button>
				<p>{plan.trialValidation} days free trial</p>
			</div>
		</div>
	</div>
);

export default PricePlanCard;
