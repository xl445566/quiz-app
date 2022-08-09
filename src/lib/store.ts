import { Store } from "../types/index";

import create from "zustand";

export const useStore = create<Store>((set) => ({
  correctQuestions: [],
  incorrectQuestions: [],
  time: 0,
  quizData: {
    status: 0,
    list: [],
  },
  noteData: {
    items: {},
    ids: [],
  },
  setQuizData: (problems) => {
    set(() => ({
      quizData: problems,
    }));
  },
  addCorrectQuestion: (question) => {
    set((state) => ({
      correctQuestions: [...state.correctQuestions, question],
    }));
  },
  addIncorrectQuestion: (question) => {
    set((state) => ({
      incorrectQuestions: [...state.incorrectQuestions, question],
    }));
  },
  addTime: () => {
    set((state) => ({
      time: state.time + 1,
    }));
  },
  init: () => {
    set(() => ({
      correctQuestions: [],
      incorrectQuestions: [],
      time: 0,
    }));
  },
  resetQuizData: () => {
    set(() => ({
      quizData: {
        status: 0,
        list: [],
      },
    }));
  },
  setNoteData: (data) => {
    set(() => ({
      noteData: data,
    }));
  },
}));
