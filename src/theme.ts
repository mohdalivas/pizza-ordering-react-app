// src/theme.ts
import { createMakeAndWithStyles } from "tss-react";
//"tss-react/compat" if your project is using Typescript < 4.4

const colorScheme = "light";

export const useTheme = function() {
  return {
    globalStyles: (theme: any) => ({
      body: {
        background: theme.colorScheme === "dark" ? "#0e1012" : "#e9e9ec",
      },
    }),
    colorScheme: colorScheme,
    fontFamily: "Golos Text, sans-serif",
    colors: {
      orange: [
        "#FF6347",
        "#DC143C",
        "#B22222",
        "#8B0000",
        "#FF0000",
        "#FFA500",
        "#FF8C00",
        "#FF7F50",
        "#FF4500",
        "#FF4500",
      ],
      dark: [
        "#d5d7e0",
        "#acaebf",
        "#8c8fa3",
        "#666980",
        "#1f2124",
        "#1f2124",
        "#292c2f",
        "#16181a",
        "#0e1012",
        "#16181a",
      ],
    },
    primaryColor: "orange",
  };
}

export const {
  makeStyles,
  withStyles,
  useStyles
} = createMakeAndWithStyles({ useTheme });