/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                green: {
                    950: '#0d1f15',
                    900: '#1a3a2a',
                    800: '#1e4433',
                    700: '#2d6a4f',
                    600: '#40916c',
                    500: '#52b788',
                    400: '#74c69d',
                },
                gold: {
                    950: '#4a3200',
                    900: '#6b4800',
                    800: '#8a6c1a',
                    700: '#a8862e',
                    600: '#c9a84c',
                    500: '#d4b86a',
                    400: '#e8c97a',
                    300: '#f0d898',
                    200: '#f7ebb8',
                    100: '#fdf3dc',
                    50: '#faf7f0',
                },
            },
            fontFamily: {
                display: ['"Playfair Display"', 'Georgia', 'serif'],
                arabic: ['"Scheherazade New"', 'serif'],
                body: ['"Lato"', 'sans-serif'],
            },
            backgroundImage: {
                'diamond-pattern': `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='0.05'%3E%3Cpath d='M40 0l40 40-40 40L0 40z'/%3E%3C/g%3E%3C/svg%3E")`,
                'diamond-dark': `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M40 0l40 40-40 40L0 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            },
            animation: {
                'slow-rotate': 'slowRotate 50s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-gold': 'pulseGold 3s ease-in-out infinite',
                'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
            },
            keyframes: {
                slowRotate: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGold: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.6)' },
                },
                scrollBounce: {
                    '0%, 100%': { transform: 'translateY(0) translateX(-50%)' },
                    '50%': { transform: 'translateY(8px) translateX(-50%)' },
                },
            },
            boxShadow: {
                'gold': '0 8px 40px rgba(201,168,76,0.2)',
                'gold-lg': '0 16px 60px rgba(201,168,76,0.3)',
                'green': '0 8px 40px rgba(26,58,42,0.2)',
                'green-lg': '0 16px 60px rgba(26,58,42,0.4)',
            },
        },
    },
    plugins: [],
}