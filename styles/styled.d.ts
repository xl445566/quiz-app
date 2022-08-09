import "styled-components";

declare module "styled-components" {
  export interface AnswerProps {
    textContent: string;
    selectedAnswer: string;
    correctAnswer: string;
  }

  export interface ContentProps {
    value: boolean;
  }

  export interface ButtonContainerProps {
    direction: string;
  }

  export interface ButtonStyleProps {
    color: string;
    hoverColor: string;
  }

  export interface TitleProps {
    size?: string;
  }
}
