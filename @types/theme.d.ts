import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    colors: {
      black: string;
      dark: string;
      primary: string;
      secondary: string;
    };
  }
}
