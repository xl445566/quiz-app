import React from "react";

export type OnClick = (
  event:
    | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    | React.TouchEvent<HTMLButtonElement | HTMLDivElement>
) => void;

export interface QuizProps {
  problems: Problems;
  number: number;
  mixedNumbers: number[];
  selectedAnswer: string;
  onCorrectClick: OnClick;
}

export interface Problems {
  status: number;
  list: Problem[];
}

export interface Problem {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
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
  onClick: OnClick;
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
