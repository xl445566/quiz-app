import React from "react";

// zustand
export interface Store {
  quizData: Problems;
  correctQuestions: Problem[];
  incorrectQuestions: Problem[];
  time: number;
  noteData: NoteData;
  setQuizData: (problems: Problems) => void;
  addCorrectQuestion: (question: Problem) => void;
  addIncorrectQuestion: (question: Problem) => void;
  addTime: () => void;
  init: () => void;
  resetQuizData: () => void;
  setNoteData: (noteData: NoteData) => void;
}

// localStorage
export type LocalStorage = typeof window.localStorage;

export enum NoteStorageKey {
  NOTE_DATA = "noteData",
}

export interface NoteData {
  items: {
    [key: string]: Note;
  };
  ids: string[];
}

export interface Note {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  memo: string;
}

// common
export type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type ClickEvent =
  | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  | React.TouchEvent<HTMLButtonElement | HTMLDivElement>;

export type OnClick = (
  event:
    | React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    | React.TouchEvent<HTMLButtonElement | HTMLDivElement>
) => void;

export interface ButtonProps {
  label: string;
  onClick?: OnClick;
  color?: string;
  hoverColor?: string;
}

// note
export interface RecordProps {
  data: NoteData;
  onClick: OnClick;
}

export interface DetailProps {
  data: Note;
  setData: (state: Note) => void;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
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
