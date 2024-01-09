import React from "react";

export default function QuestionCard({ question }) {
	return (
		<div className="space-y-3">
			<h2 className="text-xl font-semibold">{question.title}</h2>
			<p className="border-b border-b-gray-400 pb-4">{question.body}</p>
		</div>
	);
}
