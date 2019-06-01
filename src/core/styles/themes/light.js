import { keyframes, css } from "styled-components";

const bounceIn = keyframes`
  0% {
    opacity: 0.9;
    transform: scale3d(.98, .98, .98);
  }
  70% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export default {
  brand: "#0095ff",
  primary: "#333333",
  secondary: "#979797",
  backgroundPrimary: "#fafafa",
  backgroundSecondary: "#efefef",
  backgroundColorTransition: "background-color 0.2s ease",
  error: "#f82b60",
  link: "#1B95E0",
  borderColor: "#979797",
  borderRadius: "6px",
  bullish: "#6cc499",
  bearish: "#e0625e",
  ibizaSunset: "linear-gradient(to right, #ee0979, #ff6a00)",
  bounceInAnimation: css`
    ${bounceIn} 240ms cubic-bezier(0.215, 0.61, 0.355, 1);
  `
};
