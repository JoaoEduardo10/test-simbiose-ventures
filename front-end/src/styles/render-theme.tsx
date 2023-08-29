import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global-styles";
import { theme } from "./theme";

export const RenderTheme = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
