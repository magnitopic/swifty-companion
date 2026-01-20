/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// Cyberpunk dark theme inspired by the interface
				primary: "#00D9FF", // Bright cyan - main interactive elements
				"primary-dark": "#00A3CC", // Deeper cyan for pressed states
				"primary-light": "#4DE4FF", // Lighter cyan for highlights/hover
				secondary: "#FF006E", // Hot pink/magenta - accent color
				"secondary-light": "#FF4D94", // Softer pink for subtle accents
				accent: "#00FF9F", // Bright mint green - for success/achievements
				"accent-light": "#7DFFCD", // Light mint for backgrounds
				"accent-yellow": "#FFD60A", // Yellow accent (seen in some UI elements)
				danger: "#FF3864", // Bright red for errors/warnings
				"font-main": "#E0E6ED", // Light gray-blue for main text
				"font-secondary": "#8B9BB4", // Muted blue-gray for secondary text
				"font-dim": "#5A6B82", // Even more muted for tertiary text
				"background-main": "#0A0E1A", // Very dark blue-black - main background
				"background-secondary": "#141B2D", // Slightly lighter dark blue for cards
				"background-tertiary": "#1E2840", // Medium dark for elevated elements
				"border-color": "#2A3750", // Dark blue-gray for borders
				"border-light": "#3D4A64", // Slightly lighter border for emphasis
			},
		},
	},
	plugins: [],
};
