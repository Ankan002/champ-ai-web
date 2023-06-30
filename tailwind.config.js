/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				quicksand: "'Quicksand', sans-serif",
				manrope: "'Manrope', sans-serif",
				"fira-code": "'Fira Code', monospace",
			},
			colors: {
				"primary-dark": "#10111A",
				"secondary-dark": "#08070C",
				"primary-light": "#F4F6FA",
				"secondary-light": "#F1F2F6",
				"primary-orange": "#FC5830",
				"secondary-orange": "#FF0032",
				"light-grey": "#B5BAC7",
				white: "#FFFFFF",
				"primary-yellow": "#F6BA3D",
				"secondary-yellow": "#FEE9C0",
				"semi-transparent": "rgba(0, 0, 0, 0.6)",
				"primary-green": "#08CD92",
				"secondary-green": "#C1FBE6",
				"dark-green": "#51AB39",
				"primary-red": "#D61C4E",
				"primary-blue": "#59AFEF",
				"primary-purple": "#E7C7FF",
				"secondary-purple": "#8F30E0",
				//"login-image-hero-base-color": "#8559FF"
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
