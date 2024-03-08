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
                bgblk: "#001F3F",
                bgblu: "#1f242d",
                cd1: "#374151",
                cd2: "#001F50",
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
