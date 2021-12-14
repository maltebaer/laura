const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
                kicker: ["Fredericka the Great"],
            },
        },
    },
    plugins: [],
};
