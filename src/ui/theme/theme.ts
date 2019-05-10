const brand = "#1F8EFA";
const black = "#000";
const white = "#fff";
const neutralPrimary = "#636777";
const neutralSecondary = "#c2c2c2";
const neutralTertiary = "#e2e2e2";
const statusCritical = "#FF4040";
const statusError = "#FF4040";
const statusWarning = "#FFAA15";
const statusOK = brand;
const statusDisabled = "#CCCCCC";

type ThemeType = any

export const Theme: ThemeType = {
  colors: {
    brand: brand,
    black: black,
    white: white,
    neutral: {
      primary: neutralPrimary,
      secondary: neutralSecondary
    },
    status: {
      critical: statusCritical,
      error: statusError,
      warning: statusWarning,
      ok: statusOK,
      disabled: statusDisabled
    },
    text: {
      dark: "#f8f8f8",
      light: "#444444"
    },
    controls: {
      border: neutralSecondary,
      placeHolder: neutralTertiary
    },
    icon: {
      dark: "#f8f8f8",
      light: "#444444"
    },
    focus: brand
  },
  controls: {
    textInput: {
      borderWidth: "1px",
      borderRadius: "3px",
      padding: "12px 14px"
    },
    button: {
      borderRadius: "3px",
      xs: {
        fontSize: "7px",
        fontWeight: "100px",
        verticalPadding: "5px",
        horizontalPadding: "15px"
      },
      sm: {
        fontSize: "10px",
        fontWeight: "200px",
        verticalPadding: "6px",
        horizontalPadding: "18px"
      },
      md: {
        fontSize: "12px",
        fontWeight: "300px",
        verticalPadding: "8px",
        horizontalPadding: "22px"
      },
      lg: {
        fontSize: "15px",
        fontWeight: "400px",
        verticalPadding: "10px",
        horizontalPadding: "25px"
      },
      xl: {
        fontSize: "18px",
        fontWeight: "500px",
        verticalPadding: "10px",
        horizontalPadding: "28px"
      }
    }
  },
  media: {
    avatar: {
      backgroundColor: neutralPrimary,
      borderColor: brand,
      borderWidth: "1px",
      size: {
        xs: "50px",
        sm: "75px",
        md: "100px",
        lg: "125px",
        xl: "150px"
      }
    }
  },
  layouts: {
    grid: {
      column: {
        size: {
          xs: "0.2fr",
          sm: "0.5fr",
          md: "1fr",
          lg: "2fr",
          xl: "3fr"
        }
      },
      row: {
        size: {
          xs: "1fr",
          sm: "2fr",
          md: "3fr",
          lg: "4fr",
          xl: "5fr"
        }
      }
    }
  }
};
