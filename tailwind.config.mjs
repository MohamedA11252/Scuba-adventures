const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#f0f7f9',
				'surface': '#ffffff',
				'primary': '#1e3a5f',
				'secondary': '#2d7a9e',
				'accent': '#b8956a',
				'text-primary': '#1e3a5f',
				'text-secondary': '#3d5a6e',
				'ocean': '#2d7a9e',
				'ocean-dark': '#1e3a5f',
				'ocean-light': '#5bb5c5',
				'ocean-muted': '#4a8fa8',
				'sand': '#b8956a',
				'sand-light': '#d4b896',
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
				'premium': '0 10px 30px -15px rgba(30, 58, 95, 0.15)',
			}
		},
	},
	plugins: [],
}
