import type { NextPage } from "next";
import { Note, ClickEvent } from "../../src/types";

import React, { useState, useEffect } from "react";
import { useStore } from "../../src/lib/store";
import { useRouter } from "next/router";
import Head from "next/head";

import NoteStorage from "../../src/api/storage";

import Section from "../../src/common/components/Section";
import Title from "../../src/common/components/Title";
import Strong from "../../src/common/components/Strong";
import BottonContainer from "../../src/common/components/ButtonContainer";
import Button from "../../src/common/components/Button";
import Record from "../../src/features/note/Record";
import Detail from "../../src/features/note/Detail";

const NotePage: NextPage = () => {
  const { noteData, setNoteData } = useStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Note>({
    question: "",
    correctAnswer: "",
    incorrectAnswers: [],
    memo: "",
  });
  const router = useRouter();

  useEffect(() => {
    const result = NoteStorage.getNoteData();

    if (result) {
      setNoteData(result);
    }
  }, []);

  const handleModalOpen = (event: ClickEvent) => {
    const id = event.currentTarget.dataset.fullName;

    if (id) {
      setModalData({
        question: id,
        correctAnswer: noteData.items[id].correctAnswer,
        incorrectAnswers: noteData.items[id].incorrectAnswers,
        memo: noteData.items[id].memo,
      });
    }

    setIsModalOpen(true);
  };

  const handleHomePage = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>오답 노트</title>
      </Head>

      <Section>
        <Title>
          <Strong>오답노트</Strong>
        </Title>

        <Detail
          data={modalData}
          setData={setModalData}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />

        <Record data={noteData} onClick={handleModalOpen} />
      </Section>

      <BottonContainer direction="column">
        <Button
          onClick={handleHomePage}
          color="red"
          hoverColor="red"
          label="나가기"
        />
      </BottonContainer>
    </>
  );
};

export default NotePage;
