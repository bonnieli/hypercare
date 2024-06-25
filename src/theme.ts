import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

// define custom colors: https://material-ui.com/customization//=
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    blue: Palette["primary"];
    orange: Palette["primary"];
    green: Palette["primary"];
    pink: Palette["primary"];
  }
  interface PaletteOptions {
    blue: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyPropsVariantOverrides {
    primary: {
      fontFamily: "Signika, sans-serif";
    };
    secondary: {
      fontFamily: "Signika, sans-serif";
    };
  }
}

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Signika, sans-serif",
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily: "Signika, sans-serif",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h3: { fontFamily: "Signika, sans-serif", fontSize: "2rem" },
    h6: {
      fontFamily: "Signika, sans-serif",
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    caption: {
      fontFamily: "Inter, san-serif",
    },
  },
  palette: {
    primary: {
      light: "#4b4b4b",
      main: "#292929",
    },
    secondary: {
      light: "#d87171",
      main: "#833030",
    },
    blue: { main: "#1f88ff" },
    orange: { main: "#F7854C" },
    green: { main: "#5EA378" },
    pink: { main: "#F2989A" },
    error: {
      main: "#EF5C4A",
    },
    background: {
      default: "#f3f1ec",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          overflowWrap: "break-word",
          wordWrap: "break-word",
          whiteSpace: "normal !important",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "bold",
          fontSize: "0.8rem",
          textTransform: "none",
          borderRadius: "20px",
          padding: "10px 16px",
        },
        sizeSmall: {
          fontSize: "0.7rem",
          padding: "4px 16px",
          minWidth: "auto",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "24px",
          backgroundColor: grey[50],
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "40px",
            backgroundColor: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
            "& fieldset": { borderColor: grey[50] },
          },
          "& .MuiOutlinedInput-input": {
            padding: "16px 24px",
          },
          "& .MuiInputBase-multiline": {
            borderRadius: "20px",
          },
        },
      },
    },
  },
});

export default theme;
