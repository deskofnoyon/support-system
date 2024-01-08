/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1100px",
			"2xl": "1250px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: ".4rem",
				// sm: "1rem",
				// lg: "1.5rem",
				// xl: "2rem",
				"2xl": "0rem",
			},
		},

		extend: {
			colors: {
				primary: "#FABF62",
			},
			fontFamily: {
				DMSans: ["DM Sans", " sans-serif"],
			},
		},
	},
	plugins: [],
};
