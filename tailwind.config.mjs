const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				roboto_medium:['roboto_medium', ...defaultTheme.fontFamily.sans],
				roboto_italic:['roboto_Italic', ...defaultTheme.fontFamily.sans]
			},
			colors:{
				dark: '#111111',
				dark_content: '#212121',
				dark_cardtech: '#121212',
				blueviolet: '#8a2be2',
				bluelight: '#e81cff',
				violetrgba: 'rgba(138, 43, 226, 0.75)',
				orangeSpan: '#f9b234'
			}
		},
	},
	plugins: [],
}
