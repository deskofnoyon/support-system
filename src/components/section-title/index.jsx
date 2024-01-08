export default function SectionTitle({ text, heading }) {
	return (
		<div className="text-center mb-16 space-y-3">
			<p className="text-primary text-xl">{text}</p>
			<h1 className="text-2xl lg:text-3xl font-semibold">{heading}</h1>
		</div>
	);
}
