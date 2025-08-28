/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// CSS-переменные, управляемые через data-theme в globals.css
				'primary-bg': 'var(--color-bg)',
				'primary-secondary': 'var(--color-bg-secondary)',
				'primary-text': 'var(--color-text)',
				'primary-accent': 'var(--color-primary)',
				'primary-border': 'var(--color-border)'
			},
			fontFamily: {
				'lora': ['Lora', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				'custom': '0.75rem',
			},
			animation: {
				'fade-up': 'fadeUp 0.8s ease-out forwards',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'marquee': 'marquee 25s linear infinite',
				'gradient-shift': 'gradient-shift 10s ease infinite',
			},
			keyframes: {
				fadeUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				slideUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				marquee: {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(-100%)',
					},
				},
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
			},
		},
	},
	plugins: [],
}

