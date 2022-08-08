import type { NextPage } from "next";
import { Note, ClickEvent } from "../../src/types";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../src/lib/store";

import NoteStorage from "../../src/api/storage";

import Section from "../../src/common/components/Section";
import Title from "../../src/common/components/Title";
import Strong from "../../src/common/components/Strong";
import BottonContainer from "../../src/common/components/ButtonContainer";
import Button from "../../src/common/components/Button";
import Record from "../../src/features/note/Record";
import Detail from "../../src/features/note/Detail";

const NotePage: NextPage = () => {
  const router = useRouter();
  const { noteData, setNoteData } = useStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Note>({
    question: "",
    correctAnswer: "",
    incorrectAnswers: [],
    memo: "",
  });

  useEffect(() => {
    const result = NoteStorage.getNoteData() || {
      items: {},
      ids: [],
    };

    setNoteData(result);
  }, []);

  const handleHomepage = () => {
    router.push("/");
  };

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

  return (
    <>
      <Section>
        <Title>
          <Strong>오답노트</Strong>
        </Title>

        <Detail
          data={modalData}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />

        <Record data={noteData} onClick={handleModalOpen} />
      </Section>

      <BottonContainer direction="column">
        <Button label="나가기" onClick={handleHomepage} />
      </BottonContainer>
    </>
  );
};

export default NotePage;
