import type { NextPage } from "next";
import { NoteData } from "../../src/types";

import Head from "next/head";
import { useRouter } from "next/router";
import { useStore } from "../../src/lib/store";
import styled, { ContentProps } from "styled-components";

import NoteStorage from "../../src/api/storage";
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
  const {
    time,
    correctQuestions,
    incorrectQuestions,
    resetQuizData,
    setNoteData,
    init,
  } = useStore();
  const router = useRouter();

  const handleHomePage = () => {
    resetQuizData();
    router.push("/");
  };

  const handleNotePage = () => {
    const newNoteData: NoteData = {
      items: {},
      ids: [],
    };
    const originNoteData = NoteStorage.getNoteData() || {
      items: {},
      ids: [],
    };

    if (originNoteData?.ids.length === 0) {
      incorrectQuestions.forEach((value) => {
        const id = value.question;

        newNoteData.items[id] = {
          question: id,
          correctAnswer: value.correctAnswer,
          incorrectAnswers: value.incorrectAnswers,
          memo: "",
        };

        newNoteData.ids.push(id);
        NoteStorage.setNoteData(newNoteData);
        setNoteData(newNoteData);
      });
    } else {
      incorrectQuestions.forEach((value) => {
        const id = value.question;
        if (originNoteData.items[id]) {
          const index = originNoteData.ids.indexOf(id);
          const temp = originNoteData.ids.splice(index, 1)[0];
          originNoteData.ids.push(temp);
        } else {
          originNoteData.items[id] = {
            question: id,
            correctAnswer: value.correctAnswer,
            incorrectAnswers: value.incorrectAnswers,
            memo: "",
          };

          originNoteData.ids.push(id);
        }
      });

      NoteStorage.setNoteData(originNoteData);
      setNoteData(originNoteData);
    }

    router.push("/note");
    init();
  };

  const handleProblemPage = () => {
    router.push("/problem");
  };

  return (
    <>
      <Head>
        <title>결과</title>
      </Head>

      <Section>
        <Title size="30">
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
      </Section>

      <BottonContainer direction="column">
        <Button label="다시 풀기" onClick={handleProblemPage} />
        <Button label="처음 으로" onClick={handleHomePage} />
        <Button
          color="red"
          hoverColor="red"
          label="오답 노트"
          onClick={handleNotePage}
        />
      </BottonContainer>
    </>
  );
};

export default Chart;
