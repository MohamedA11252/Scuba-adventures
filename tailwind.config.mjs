const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#F8F9FA', // Soft, almost white
				'surface': '#FFFFFF',    // Pure white for cards and surfaces
				'primary': '#0A2E36',    // Deep, muted ocean blue for text and primary elements
				'secondary': '#277DA1',  // Lighter, friendly blue for accents
				'accent': '#F9A826',     // A subtle, warm sandy/gold accent
				'text-primary': '#0A2E36',
				'text-secondary': '#5A7D8C',
			},
			fontFamily: {
				sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
				serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'xl': '1rem',
			},
			boxShadow: {
				'premium': '0 10px 30px -15px rgba(10, 46, 54, 0.15)',
			}
		},
	},
	plugins: [],
}
