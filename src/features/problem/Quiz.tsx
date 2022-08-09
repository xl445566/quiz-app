import type { NextPage } from "next";
import { QuizProps } from "../../types/index";

import React from "react";
import styled, { AnswerProps } from "styled-components";

import Section from "../../common/components/Section";
import Title from "../../common/components/Title";
import Strong from "../../common/components/Strong";

const Question = styled.article`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const Answers = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 30vh;
`;

const Answer = styled.div<AnswerProps>`
  width: 100%;
  min-width: 30vh;
  height: 100%;
  padding: 10px;
  border: ${(props) => {
    if (props.selectedAnswer === "") {
      return "2px solid var(--point-color)";
    } else if (
      props.textContent === props.correctAnswer &&
      props.textContent === props.selectedAnswer
    ) {
      return "2px solid var(--point-color)";
    } else if (props.textContent === props.selectedAnswer) {
      return "2px solid var(--red-color)";
    } else if (props.textContent === props.correctAnswer) {
      return "2px solid var(--point-color)";
    } else {
      return "2px solid var(--point-color)";
    }
  }};
  border-radius: 10px;
  color: ${(props) => {
    if (props.selectedAnswer === "") {
      return "var(--black-color)";
    } else if (
      props.textContent === props.correctAnswer &&
      props.textContent === props.selectedAnswer
    ) {
      return "var(--white-color)";
    } else if (props.textContent === props.selectedAnswer) {
      return "var(--white-color)";
    } else if (props.textContent === props.correctAnswer) {
      return "var(--white-color)";
    }
  }};
  background: ${(props) => {
    if (props.selectedAnswer === "") {
      return "var(--white-color)";
    } else if (
      props.textContent === props.correctAnswer &&
      props.textContent === props.selectedAnswer
    ) {
      return "var(--point-color)";
    } else if (props.textContent === props.selectedAnswer) {
      return "var(--red-color)";
    } else if (props.textContent === props.correctAnswer) {
      return "var(--point-color)";
    } else {
      return "var(--white-color)";
    }
  }};
  cursor: pointer;

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const Quiz: NextPage<QuizProps> = ({
  problems,
  number,
  mixedNumbers,
  selectedAnswer,
  onCorrectClick,
}) => {
  return (
    <Section>
      <Question>
        <Title>
          <Strong>Q. {problems.list[number].question}</Strong>
        </Title>
      </Question>

      <Answers>
        {mixedNumbers.map((value: number) => {
          return (
            <Answer
              key={value}
              onClick={onCorrectClick}
              textContent={problems.list[number].answers[value]}
              selectedAnswer={selectedAnswer}
              correctAnswer={problems.list[number].correctAnswer}
            >
              {problems.list[number].answers[value]}
            </Answer>
          );
        })}
      </Answers>
    </Section>
  );
};

export default Quiz;
