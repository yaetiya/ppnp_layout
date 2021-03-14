import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: '"Montserrat"',
  },
  spacing: (factor) => `${8 * factor}px`,
  palette: {
    primary: {
      main: "#3469F6",
      contrastText: "#FFF",
      light: "#EAEEF3",
      dark: "#5862EE",
    },
    secondary: {
      main: "#626870",
    },
    background: {
      paper: "#EAEEF3",
    },
  },
  overrides: {
    MuiTypography: {
      colorTextPrimary: {
        color: "#888DE0",
      },
      body1: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#626870",
      },
    },
    MuiPaper: {
      elevation0: {
        borderRadius: 24,
      },
    },
  },
});
