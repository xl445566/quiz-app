import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useStore } from "../../src/lib/store";
import styled, { ContentProps } from "styled-components";

import printTime from "../../src/common/utils/printTime";

import DonutChart from "../../src/features/chart/DonutChart";
import Section from "../../src/common/components/Section";
import Title from "../../src/common/components/Title";
import Strong from "../../src/common/components/Strong";
import BottonContainer from "../../src/common/components/ButtonContainer";
import Button from "../../src/common/components/Button";

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.h1<ContentProps>`
  padding: 20px;
  color: ${(props) => {
    if (props.value) {
      return "var(--point-color)";
    } else {
      return "var(--red-color)";
    }
  }};
  font-size: 1.5rem;
`;

const Chart: NextPage = () => {
  const { time, correctQuestions, incorrectQuestions, resetQuizData } =
    useStore();
  const router = useRouter();

  const handleQuizRetry = () => {
    router.push("/problem");
  };

  const handleHomePage = () => {
    resetQuizData();
    router.push("/");
  };

  const handleNotePage = () => {
    router.push("/note");
  };

  return (
    <>
      <Section>
        <Title>
          <Strong>결과</Strong>
        </Title>

        <DonutChart
          time={printTime(time)}
          correctQuestions={correctQuestions}
          incorrectQuestions={incorrectQuestions}
        />

        <ContentContainer>
          <Content value={true}>정답: {correctQuestions.length}</Content>
          <Content value={false}>오답: {incorrectQuestions.length}</Content>
        </ContentContainer>

        <BottonContainer>
          <Button label="다시 풀기" onClick={handleQuizRetry} />
          <Button label="처음 으로" onClick={handleHomePage} />
          <Button label="오답 노트" onClick={handleNotePage} />
        </BottonContainer>
      </Section>
    </>
  );
};

export default Chart;
