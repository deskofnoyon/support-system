import React from "react";
import SectionTitle from "../section-title";
import QuestionCard from "./question-card";

const questions = [
	{
		id: 1,
		title: "Which domain should I purchase?",
		body: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result",
	},
	{
		id: 2,
		title: "What are some tips when choosing a name?",
		body: "Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.",
	},
	{
		id: 3,
		title: "What if I need help choosing the right domain?",
		body: "Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.",
	},
	{
		id: 4,
		title: "Can I upgrade or downgrade my web hosting plan",
		body: "The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.",
	},
	{
		id: 5,
		title: "How do I upgrade the storage capacity of my hosting plan?",
		body: "Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.",
	},
	{
		id: 6,
		title: "What is in In Motion Hosting’s uptime rate?",
		body: "Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install",
	},
	{
		id: 7,
		title: "Learn from community on Brandwagon",
		body: "Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.",
	},
];

export default function FAQSection() {
	return (
		<section className="py-14">
			<div className="container">
				<SectionTitle
					text={"Get yours question answer"}
					heading={"Frequantly asked question"}
				/>
				<div className="flex flex-col space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-10 lg:gap-y-5">
					{questions.map((question) => (
						<QuestionCard key={question.id} question={question} />
					))}
				</div>
			</div>
		</section>
	);
}
