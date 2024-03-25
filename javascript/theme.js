//! Depricated

//* Website Themes
const theme_default = ["#e6e7fe", "#101215", "#7afb7d", "#048d98", "#108ff8"];
const theme_legacy = ["#eae9fc", "#101014", "#a280ff", "#314049", "#7d95ff"];
const theme_mint = ["#edf7f5", "#050f0d", "#8dead6", "#0ea384", "#11fecd"];
const theme_ocean = ["#e1edf2", "#030709", "#98c8e1", "#1e6082", "#3da6dc"];
const theme_pastel = ["#081d1e", "#effafb", "#41c3ce", "#c096e4", "#d96cce"];
const theme_grey = ["#08090c", "#fbfcfd", "#7187a1", "#b2b1cc", "#9391b6"];
const theme_names = ["default", "mint", "ocean", "pastel", "grey"];

//* set initial theme info
var current_theme = localStorage["current_theme"];
switchTheme(current_theme);


//* Change theme
function switchTheme(theme_name) {
    //Switches the current theme based on the provided theme name.
    switch (theme_name) {
        case "legacy": var theme_set = theme_legacy; break;
        case "mint": var theme_set = theme_mint; break;
        case "ocean": var theme_set = theme_ocean; break;
        case "pastel": var theme_set = theme_pastel; break;
        case "grey": var theme_set = theme_grey; break;
        default: var theme_set = theme_default
    }

    // Updates the current theme by setting CSS variables
    localStorage["current_theme"] = theme_name;
    document.documentElement.style.setProperty('--text', theme_set[0]);
    document.documentElement.style.setProperty('--background', theme_set[1]);
    document.documentElement.style.setProperty('--primary', theme_set[2]);
    document.documentElement.style.setProperty('--secondary', theme_set[3]);
    document.documentElement.style.setProperty('--accent', theme_set[4]);
}
