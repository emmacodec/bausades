import {createTheme} from'@mui/material/styles';


export const style = {
    primary: {
        100: "#673ab7",
        200: "#5e35b1",
        300: "#512da8",
        400: "#4527a0",
    },

    secondary: {
        100: "#ffcc80",
        200: "#ffb74d",
        300: "#ffa726",
        400: "#ff9800",
        500: "#fb8c00",
        600: "#f57c00",
        700: "#ef6c00",
        800: "#e65100",
        900: "#d84315",
    },

    amber: {
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00"
    },
}

export const theme = createTheme({
    palette: {
        primary: {
            main: style.primary[400],
        },

        secondary: {
            main: style.secondary[500],
        },

        amber: {
            dark: style.amber[700],
            main: style.amber[500],
            light: style.amber[100],
        },
    },

    typography: {
        fontFamily: ["Fauna One", "Sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Cinzel", "Sans-serif"].join(","),
            fontSize: 48,
        },

        h2: {
            fontFamily: ["Cinzel", "Sans-serif"].join(","),
            fontSize: 36,
        },

        h3: {
            fontFamily: ["Cinzel", "Sans-serif"].join(","),
            fontSize: 20,
        },

        h4: {
            fontFamily: ["Cinzel", "Sans-serif"].join(","),
            fontSize: 14,
        },
    },
});




