import React from "react";

// zustand
export interface Store {
  quizData: Problems;
  correctQuestions: Problem[];
  incorrectQuestions: Problem[];
  time: number;
  setQuizData: (problems: Problems) => void;
  addCorrectQuestion: (question: Problem) => void;
  addIncorrectQuestion: (question: Problem) => void;
  addTime: () => void;
  init: () => void;
  resetQuizData: () => void;
}

// common
export type OnClick = (
  event:
    | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    | React.TouchEvent<HTMLButtonElement | HTMLDivElement>
) => void;

export interface ButtonProps {
  label: string;
  onClick: OnClick;
}

// chart
export interface DonutChartProps {
  time: string;
  correctQuestions: Problem[];
  incorrectQuestions: Problem[];
}

// problem
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

// home
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
