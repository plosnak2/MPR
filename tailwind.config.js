/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        colors: {
            "mine-shaft": {
                DEFAULT: "#222229",
                50: "#7E7E7E",
                100: "#747474",
                200: "#5F5F5F",
                300: "#4B4B4B",
                400: "#363636",
                500: "#222229",
                600: "#060606",
                700: "#000000",
                800: "#000000",
                900: "#000000",
            },
            gray: {
                DEFAULT: "#6B7280",
                50: "#CDD0D5",
                100: "#C2C5CC",
                200: "#ACB0BA",
                300: "#969BA7",
                400: "#7F8694",
                500: "#6B7280",
                600: "#515761",
                700: "#383C43",
                800: "#1E2024",
                900: "#050506",
            },
            red: "#FF0000",
            green: {
                DEFAULT: "#6CB15C",
                50: "#DCECD8",
                100: "#D0E6CA",
                200: "#B7D9AF",
                300: "#9ECB93",
                400: "#85BE78",
                500: "#6CB15C",
                600: "#539045",
                700: "#3D6A33",
                800: "#274421",
                900: "#111E0E",
            },
            blue: {
                DEFAULT: "#3BA2F6",
                50: "#C4F6FC",
                100: "#B0F0FB",
                200: "#89DEFA",
                300: "#62C4F8",
                400: "#3BA2F6",
                500: "#0B71EE",
                600: "#0845B8",
                700: "#062583",
                800: "#040E4D",
                900: "#010217",
            },
            white: "#fff",
            black: "#000",
            transparent: {
                DEFAULT: " #00000000",
                50: "#00000011",
                100: "#00000022",
                200: "#00000033",
                300: "#00000055",
                400: "#00000066",
                500: "#00000088",
                600: "#000000aa",
                700: "#000000cc",
                800: "#000000dd",
                900: "#000000ff",
            },
        },
    },
    plugins: [],
};