/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'cartiva-bg': '#fafafa',
				'cartiva-text': '#111111',
				'cartiva-gray': '#555555',
				'cartiva-accent': '#606c38', // Muted earthy green
				'cartiva-light-border': '#e5e5e5',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
};
