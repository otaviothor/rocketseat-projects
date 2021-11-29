import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      backgroud: string;
      text: string;
    };
  }
}
