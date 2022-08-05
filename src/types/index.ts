import React from "react";

export interface QuizProps {
  problems: Problems;
  number: number;
  mixedNumbers: number[];
  onClick: () => void;
}

export interface Problems {
  status: number;
  list: Problem[];
}

export interface Problem {
  question: string;
  correctAnswer: string;
  answers: string[];
}

export interface OriginProblem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ProblemProps {
  problems: Problems;
  randomNumbers: number[];
}

export interface ButtonProps {
  label: string;
  onClick: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => void;
}

export interface InstructionProps {
  data: InstructionData;
}

export interface InstructionData {
  title: string;
  contents: Array<Contents>;
}

export interface Contents {
  id: number;
  content: string;
}
