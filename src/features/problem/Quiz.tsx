import type { NextPage } from "next";
import { QuizProps } from "../../types/index";

import React from "react";
import styled from "styled-components";

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

const Answer = styled.div`
  width: 100%;
  min-width: 30vh;
  height: 100%;
  padding: 10px;
  border: 2px solid var(--point-color);
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: var(--white-color);
    background: var(--point-color);
  }
`;

const Quiz: NextPage<QuizProps> = ({
  problems,
  number,
  mixedNumbers,
  onClick,
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
            <Answer key={value} onClick={onClick}>
              {problems.list[number].answers[value]}
            </Answer>
          );
        })}
      </Answers>
    </Section>
  );
};

export default Quiz;
