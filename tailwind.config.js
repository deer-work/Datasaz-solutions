/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                'slide-in': 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-out': 'slideOut 150ms ease-out',
                'swipe-out': 'swipeOut 100ms ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                slideIn: {
                    from: { transform: 'translateX(calc(100% + 1.5rem))' },
                    to: { transform: 'translateX(0)' },
                },
                slideOut: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(100% + 1.5rem))' },
                },
                swipeOut: {
                    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
                    to: { transform: 'translateX(calc(100% + 1.5rem))' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { 
                        boxShadow: '0 0 10px rgba(22, 250, 71, 0.5)' 
                    },
                    '50%': { 
                        boxShadow: '0 0 20px rgba(22, 250, 71, 0.8)' 
                    },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                'glow': '0 0 15px rgba(22, 250, 71, 0.5)',
                'blue-glow': '0 0 15px rgba(4, 141, 222, 0.5)',
                'purple-glow': '0 0 15px rgba(217, 222, 248, 0.5)',
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.15)',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                // Brand colors
                'moonraker': '#d9def8',
                'montecarlo': '#90d7d2',
                'datasaz-blue': '#048dde',
                'datasaz-green': '#16fa47',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'neural-pattern': 'radial-gradient(circle at 30% 30%, rgba(22, 250, 71, 0.05) 0%, transparent 20%), radial-gradient(circle at 70% 60%, rgba(4, 141, 222, 0.05) 0%, transparent 20%), radial-gradient(circle at 50% 40%, rgba(217, 222, 248, 0.05) 0%, transparent 30%)',
                'neural-pattern-dark': 'radial-gradient(circle at 30% 30%, rgba(22, 250, 71, 0.1) 0%, transparent 20%), radial-gradient(circle at 70% 60%, rgba(4, 141, 222, 0.1) 0%, transparent 20%), radial-gradient(circle at 50% 40%, rgba(217, 222, 248, 0.1) 0%, transparent 30%)',
            },
            transitionProperty: {
                'glow': 'box-shadow, transform, background, border-color',
            },
            fontFamily: {
                sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
                roboto: ['var(--font-roboto)', 'sans-serif'],
            },
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(10px)',
            },
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require('@tailwindcss/typography'),
    ],
} 