import check from "../../assets/check.svg";
import cross from "../../assets/cross.svg";




const PricePlanCard = ({ plan }) => {
	return (
		<div className="relative">
			{plan.recommended && (
				<div className="py-1 px-3 uppercase bg-[#52ACFF] text-white rounded-t-md text-center absolute -top-[28px] left-0 w-full text-sm font-semibold">
					Recommended
				</div>
			)}

			<div
				className={`bg-white text-center space-y-5  border duration-200 hover:shadow-md ${!plan.recommended ? "rounded-md" : "rounded-b-md"
					}`}
			>
				<div className="py-8 px-3 space-y-4">
					<h3 className="text-xl font-medium text-gray-400">
						{plan.packageName}
					</h3>
					<h1 className="text-3xl font-bold">
						<span>${plan.price}/</span>
						<span className="text-sm">per mo</span>
					</h1>
				</div>
				<table className="table-auto  w-full">
					{Object.keys(plan.packageFacilates).map((fc, index) => {

						let inputString = fc;
						let convertedString = inputString.replace(/([A-Z])/g, ' $1').trim();
						convertedString = convertedString.charAt(0).toUpperCase() + convertedString.slice(1);


						return (
							<tr
								className="border-b h-[40px] lg:flex lg:items-center"
								key={index}
							>
								<td className="lg:hidden">
									{
										convertedString
									}
								</td>

								<td className="mx-auto">
									<img
										src={plan.packageFacilates[fc] ? check : cross}
										alt="facilaty-mark"
									/>
								</td>
							</tr>)
					})}
				</table>
				<div className="py-10 px-3 space-y-4">
					<button className="btn bg-transparent text-primary border-primary border hover:bg-primary hover:text-white">
						Choose Plan
					</button>
					<p>{plan.trialValidation} days free trial</p>
				</div>
			</div>
		</div>
	)
}


export default PricePlanCard;
