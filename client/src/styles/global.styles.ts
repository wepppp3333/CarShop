/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*": {
    boxSizing: "border-box",
  } as const,
  "html, body, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
  },
  p: {
    margin: 0,
    padding: 0,
  },
  button: {
    margin: 0,
    padding: 0,
  },
  a: {
    textDecoration: "none",
    color: "black",
  },
  // img: {
  //   with: "100%",
  //   height: "100%",
  // },
};
