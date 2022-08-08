import type { NextPage } from "next";
import { DetailProps } from "../../types/index";

import { useRef } from "react";
import { useStore } from "../../lib/store";
import styled from "styled-components";
import Modal from "react-modal";

import NoteStorage from "../../api/storage";

import Button from "../../common/components/Button";

const ModalQuestion = styled.h3`
  padding-top: 20px;
  color: var(--point-color);
`;

const ModalCorrectAnswer = styled.div`
  padding-top: 20px;
  color: var(--red-color);
`;

const ModalIncorrectAnswer = styled.div`
  color: var(--dark-gray-color);
`;

const ModalMemo = styled.textarea`
  width: 100%;
  height: 100%;
  max-height: 20vh;
  margin-top: 20px;
  border: 1px solid var(--light-gray-color);
  font-size: 1rem;
  resize: none;
  outline: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const customModalStyle = {
  content: {
    width: "80%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
  },
};

Modal.setAppElement("#modal");

const Detail: NextPage<DetailProps> = ({ data, isOpen, setIsOpen }) => {
  const noteStorage = NoteStorage.getNoteData() || {
    items: {},
    ids: [],
  };
  const { noteData, setNoteData } = useStore();
  const memoRef = useRef<HTMLTextAreaElement>(null);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleMemoSave = () => {
    const id = data.question;

    if (memoRef.current) {
      noteStorage.items[id].memo = memoRef.current?.value;
      NoteStorage.setNoteData(noteStorage);
      setNoteData(noteStorage);
    }

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
          ref={memoRef}
          defaultValue={noteData.items[data.question]?.memo}
          value={memoRef.current?.value}
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
