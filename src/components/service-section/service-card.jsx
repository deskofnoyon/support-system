const ServiceCard = ({ service }) => (
	<div className="flex space-x-3">
		<div className="w-28">
			<img src={service.icon} alt="service-icon" />
		</div>
		<div className="space-y-2 lg:space-y-3">
			<h2 className="text-xl font-semibold">{service.name}</h2>
			<p className="leading-7">{service.body}</p>
		</div>
	</div>
);

export default ServiceCard;
