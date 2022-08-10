import type { NextPage } from "next";
import { DetailProps, ChangeEvent } from "../../types/index";

import React, { useState, useEffect } from "react";
import { useStore } from "../../lib/store";
import styled from "styled-components";
import Modal from "react-modal";

import NoteStorage from "../../api/storage";

import Button from "../../common/components/Button";

const ModalQuestion = styled.h3`
  height: 10%;
  max-height: 10vh;
  color: var(--point-color);
  font-size: 1rem;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.5rem;
  }
`;

const ModalCorrectAnswer = styled.div`
  height: 5%;
  max-height: 5vh;
  padding-top: 20px;
  color: var(--red-color);

  @media ${(props) => props.theme.mobile} {
    padding-top: 10px;
    font-size: 0.4rem;
  }
`;

const ModalIncorrectAnswer = styled.div`
  height: 5%;
  max-height: 5vh;
  color: var(--dark-gray-color);

  @media ${(props) => props.theme.mobile} {
    font-size: 0.4rem;
  }
`;

const ModalMemo = styled.textarea`
  width: 100%;
  height: 25%;
  min-height: 25vh;
  border: 1px solid var(--light-gray-color);
  margin-top: 10px;
  font-size: 1rem;
  resize: none;
  outline: none;

  @media ${(props) => props.theme.mobile} {
    height: 20%;
    max-height: 20vh;
    font-size: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
  height: 12%;
  min-height: 12vh;

  @media ${(props) => props.theme.mobile} {
    gap: 5px;
    height: 70px;
  }
`;

const customModalStyle = {
  content: {
    width: "80%",
    maxWidth: "80vh",
    height: "60%",
    maxHeight: "60vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid var(--point-color)",
    borderRadius: "15px",
    overflow: "hidden",
  },
};

Modal.setAppElement("#modal");

const Detail: NextPage<DetailProps> = ({
  data,
  setData,
  isOpen,
  setIsOpen,
}) => {
  const noteStorage = NoteStorage.getNoteData() || {
    items: {},
    ids: [],
  };
  const { setNoteData } = useStore();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(data.memo);
  }, [data]);

  const handleMemoChange = (event: ChangeEvent) => {
    setText(event.target.value);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleMemoSave = () => {
    const id = data.question;

    noteStorage.items[id].memo = text;
    NoteStorage.setNoteData(noteStorage);
    setNoteData(noteStorage);
    setData({
      ...data,
      memo: text,
    });
    setIsOpen(false);
  };

  const handleRecordRemove = () => {
    const id = data.question;
    NoteStorage.deleteItem(id);
    const newNoteStorage = NoteStorage.getNoteData();

    if (newNoteStorage) {
      setNoteData(newNoteStorage);
    }

    setIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={customModalStyle}
        onRequestClose={handleModalClose}
        contentLabel="오답 노트 상세 내용 모달"
      >
        <ModalQuestion>문제: {data.question}</ModalQuestion>

        <ModalCorrectAnswer>정답: {data.correctAnswer}</ModalCorrectAnswer>

        {data.incorrectAnswers.map((value, index) => {
          return (
            <ModalIncorrectAnswer key={index}>
              오답: {value}
            </ModalIncorrectAnswer>
          );
        })}

        <ModalMemo
          value={text}
          onChange={handleMemoChange}
          placeholder="기록된 내용이 없습니다."
        />

        <ButtonWrapper>
          <Button
            color="red"
            hoverColor="red"
            label="제거"
            onClick={handleRecordRemove}
          />
          <Button label="저장" onClick={handleMemoSave} />
        </ButtonWrapper>
      </Modal>
    </>
  );
};

export default Detail;
