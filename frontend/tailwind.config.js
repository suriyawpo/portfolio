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
                bgblu: "#001F3F",
                bgblk: "#1f242d",
                bgh: "#101010",
                cd2: "#191919",
                cd1: "#001F50",
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
