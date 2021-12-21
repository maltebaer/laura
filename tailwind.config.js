const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                kicker: ["Fredericka the Great"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
