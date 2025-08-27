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
				// // Ida Optika цветовая палитра
				// primary: {
				// 	bg: '#FDF8F0',        // Нежный теплый бежевый
				// 	text: '#40322C',      // Глубокий теплый коричневый
				// 	accent: '#A67B5B',    // Приглушенный благородный коричневый
				// 	secondary: '#D9C6B5', // Светло-бежевый для секций
				// },
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
			},
		},
	},
	plugins: [],
}

