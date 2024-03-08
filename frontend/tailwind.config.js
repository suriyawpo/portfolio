/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: [
                    "Inter",
                    "sans-serif"
                ],
                cookie: ["Cookie"]
            },
            colors: {
                //      bg: "#1f242d",
                bg: "#1f242d",
                prm: "#1f242d",
                primarylight: "#050a33",
                text: "#374151",
                third: "lime"
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "15px"
                }
            }
        },
        plugins: []
    }
};
