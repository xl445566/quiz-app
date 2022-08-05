import type { NextPage } from "next";
import { ProblemProps, Problems, OriginProblem } from "../../src/types/index";

import { useState } from "react";
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
  const [number, setNumber] = useState<number>(0);
  const [mixedNumbers, setMixedNumbers] =
    useState<Array<number>>(randomNumbers);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

  const handleNextProblem = () => {
    if (problems.list.length - 1 > number) {
      setNumber((state) => state + 1);
      setMixedNumbers(generateRandomIndex(4));
      setIsButtonVisible(false);
    }
  };

  const handleCorrectClick = () => {
    if (!isButtonVisible) {
      setIsButtonVisible(true);
    }
  };

  return (
    <>
      <Quiz
        problems={problems}
        number={number}
        mixedNumbers={mixedNumbers}
        onClick={handleCorrectClick}
      />

      <BottonContainer>
        {isButtonVisible && (
          <Button label="다음 문제" onClick={handleNextProblem} />
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
  const problems: Problems = {
    status: data.response_code,
    list: data.results.map((value: OriginProblem) => {
      return {
        question: decodeURIComponent(value.question),
        correctAnswer: decodeURIComponent(value.correct_answer),
        answers: [
          decodeURIComponent(value.correct_answer),
          ...value.incorrect_answers.map((value) => decodeURIComponent(value)),
        ],
      };
    }),
  };
  const randomNumbers = generateRandomIndex(4);

  return {
    props: {
      problems,
      randomNumbers,
    },
  };
};

export default Problem;
