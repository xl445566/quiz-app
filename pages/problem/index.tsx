import type { NextPage } from "next";
import {
  ProblemProps,
  Problems,
  OriginProblem,
  OnClick,
} from "../../src/types/index";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../src/lib/store";

import generateRandomIndex from "../../src/common/utils/generateRandomIndex";

import BottonContainer from "../../src/common/components/ButtonContainer";
import Button from "../../src/common/components/Button";
import Quiz from "../../src/features/problem/Quiz";

const Problem: NextPage<ProblemProps> = ({ problems, randomNumbers }) => {
  const {
    addTime,
    addCorrectQuestion,
    addIncorrectQuestion,
    quizData,
    setQuizData,
    init,
  } = useStore();
  const router = useRouter();
  const [number, setNumber] = useState<number>(0);
  const [mixedNumbers, setMixedNumbers] =
    useState<Array<number>>(randomNumbers);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  useEffect(() => {
    init();

    if (!quizData.list.length) {
      setQuizData(problems);
    }
  }, [problems]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      addTime();
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const handleNextProblem = () => {
    if (problems.list.length - 1 > number) {
      setNumber((state) => state + 1);
      setMixedNumbers(generateRandomIndex(4));
      setSelectedAnswer("");
    }
  };

  const handleCorrectClick: OnClick = (event) => {
    if (!selectedAnswer) {
      const content = event.currentTarget.textContent || "";
      const question = quizData.list.length
        ? quizData.list[number]
        : problems.list[number];
      const correctAnswer = question.correctAnswer;

      if (content === correctAnswer) {
        addCorrectQuestion(question);
      } else {
        addIncorrectQuestion(question);
      }

      setSelectedAnswer(content);
    }
  };

  const handleChartPage = () => {
    router.push("chart");
  };

  return (
    <>
      <Quiz
        problems={quizData.list.length ? quizData : problems}
        number={number}
        mixedNumbers={mixedNumbers}
        selectedAnswer={selectedAnswer}
        onCorrectClick={handleCorrectClick}
      />

      <BottonContainer>
        {selectedAnswer && number < 9 && (
          <Button label="다음 문제" onClick={handleNextProblem} />
        )}

        {selectedAnswer && number === 9 && (
          <Button label="결과 보기" onClick={handleChartPage} />
        )}
      </BottonContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986"
  );
  const data = await response.json();
  const randomNumbers = generateRandomIndex(4);
  const problems: Problems = {
    status: data.response_code,
    list: data.results.map((value: OriginProblem) => {
      const question = decodeURIComponent(value.question);
      const correctAnswer = decodeURIComponent(value.correct_answer);
      const incorrectAnswers = value.incorrect_answers.map((value) =>
        decodeURIComponent(value)
      );
      const answers = [correctAnswer, ...incorrectAnswers];

      return {
        question,
        correctAnswer,
        incorrectAnswers,
        answers,
      };
    }),
  };

  return {
    props: {
      randomNumbers,
      problems,
    },
  };
};

export default Problem;
