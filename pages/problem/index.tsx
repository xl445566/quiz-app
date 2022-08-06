import type { NextPage } from "next";
import {
  ProblemProps,
  Problems,
  OriginProblem,
  OnClick,
} from "../../src/types/index";

import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import generateRandomIndex from "../../src/common/utils/generateRandomIndex";

import Button from "../../src/common/components/Button";
import Quiz from "../../src/features/problem/Quiz";

const BottonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20%;
  min-height: 20vh;
`;

const Problem: NextPage<ProblemProps> = ({ problems, randomNumbers }) => {
  const router = useRouter();
  const [number, setNumber] = useState<number>(0);
  const [mixedNumbers, setMixedNumbers] =
    useState<Array<number>>(randomNumbers);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleNextProblem = () => {
    if (problems.list.length - 1 > number) {
      setNumber((state) => state + 1);
      setMixedNumbers(generateRandomIndex(4));
      setSelectedAnswer("");
    }
  };

  const handleCorrectClick: OnClick = (event) => {
    if (!selectedAnswer) {
      setSelectedAnswer(
        event.currentTarget.textContent === null
          ? ""
          : event.currentTarget.textContent
      );
    }
  };

  const handleChartPage = () => {
    router.push("chart");
  };

  return (
    <>
      <Quiz
        problems={problems}
        number={number}
        mixedNumbers={mixedNumbers}
        selectedAnswer={selectedAnswer}
        onCorrectClick={handleCorrectClick}
      />

      <BottonContainer>
        {selectedAnswer && number < 9 && (
          <Button label="다음 문제" onClick={handleNextProblem} />
        )}

        {number === 9 && <Button label="결과 보기" onClick={handleChartPage} />}
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
