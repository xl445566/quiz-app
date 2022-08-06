import "styled-components";

declare module "styled-components" {
  export interface AnswerProps {
    textContent: string;
    selectedAnswer: string;
    correctAnswer: string;
  }
}
