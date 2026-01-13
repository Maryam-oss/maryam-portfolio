/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                background: '#f8f9fa', // Very light gray/white
                primary: '#1a1a1a',    // Dark Charcoal
                secondary: '#6b7280',  // Medium Gray
                accent: '#fb7185',     // Rose-400 (Pinkish)
                accentLight: '#ffe4e6', // Rose-100
                accentDark: '#e11d48',  // Rose-600
                surface: '#ffffff',    // White
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'blob': {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'blob': 'blob 7s infinite',
            }
        },
    },
    plugins: [],
}
