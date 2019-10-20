import Typography from "typography"

import "../fonts/fonts.css"

export const fonts = {
  firaMono: "Fira Mono",
  firaMonoMedium: "Fira Mono Medium",
  firaMonoBold: "Fira Mono Bold",
}

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.firaMonoBold, "sans-serif"],
  bodyFontFamily: [fonts.firaMono, "sans-serif"],
  headerColor: "hsla(0,0%,0%,0.9)",
  bodyColor: "hsla(0,0%,0%,0.8)",

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: "hsla(0,0%,0%,0.75)",
      fontFamily: fonts.firaMono,
    },
    "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code": {
      fontSize: "inherit",
    },
    h2: {
      color: "hsla(0,0%,0%,0.775)",
      fontFamily: fonts.firaMono,
    },
    h3: {
      color: "hsla(0,0%,0%,0.8)",
    },
    "h1,h2,h3,h4,h5,h6": {
      lineHeight: 1,
    },
    "h1,h2,h3,h4": {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
      letterSpacing: "-0.04rem",
    },
    strong: {
      fontFamily: fonts.firaMonoMedium,
      fontStyle: "bold",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
