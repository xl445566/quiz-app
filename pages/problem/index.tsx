import type { NextPage } from "next";
import {
  ProblemProps,
  Problems,
  OriginProblem,
  OnClick,
} from "../../src/types/index";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useStore } from "../../src/lib/store";
import styled from "styled-components";

import generateRandomIndex from "../../src/common/utils/generateRandomIndex";

import BottonContainer from "../../src/common/components/ButtonContainer";
import Button from "../../src/common/components/Button";
import Quiz from "../../src/features/problem/Quiz";

const Empty = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ERROR_CODE = 9999;

const Problem: NextPage<ProblemProps> = ({ problems, randomNumbers }) => {
  const {
    addTime,
    addCorrectQuestion,
    addIncorrectQuestion,
    quizData,
    setQuizData,
    init,
  } = useStore();
  const [number, setNumber] = useState<number>(0);
  const [mixedNumbers, setMixedNumbers] =
    useState<Array<number>>(randomNumbers);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    init();

    if (!quizData.list.length) {
      setQuizData(problems);
    }

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

  const handleHomePage = () => {
    router.push("/");
  };

  const handleChartPage = () => {
    router.push("/chart");
  };

  return (
    <>
      <Head>
        <title>문제 풀이 중...</title>
      </Head>

      {problems.status === ERROR_CODE ? (
        <Empty>
          문제를 불러오는데 실패 했습니다.
          <Button onClick={handleHomePage} label="돌아가기" />
        </Empty>
      ) : (
        <>
          <Quiz
            problems={quizData.list.length ? quizData : problems}
            number={number}
            mixedNumbers={mixedNumbers}
            selectedAnswer={selectedAnswer}
            onCorrectClick={handleCorrectClick}
          />

          <BottonContainer direction="row">
            {selectedAnswer && number < 9 && (
              <Button label="다음 문항" onClick={handleNextProblem} />
            )}

            {selectedAnswer && number === 9 && (
              <Button label="결과 보기" onClick={handleChartPage} />
            )}
          </BottonContainer>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const url = process.env.API_QUIZ_DATA_URL;

  try {
    const response = await fetch(url || "");
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
  } catch (error) {
    const result = {
      randomNumbers: [],
      problems: {
        status: ERROR_CODE,
        list: {
          question: "null",
          correctAnswer: "null",
          incorrectAnswers: ["null"],
          answers: ["null"],
        },
      },
    };

    return {
      props: result,
    };
  }
};

export default Problem;
