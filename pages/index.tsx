import type { NextPage } from "next";
import { InstructionProps } from "../src/types/index";

import { useRouter } from "next/router";

import Instrunction from "../src/features/home/Instruction";
import Button from "../src/common/components/Button";
import BottonContainer from "../src/common/components/ButtonContainer";

const Home: NextPage<InstructionProps> = ({ data }) => {
  const router = useRouter();

  const handleProblemPage = () => {
    router.push("/problem");
  };

  const handleNotePage = () => {
    router.push("/note");
  };

  return (
    <>
      <Instrunction data={data} />

      <BottonContainer direction="column">
        <Button label="퀴즈 시작" onClick={handleProblemPage} />
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

export const getStaticProps = async () => {
  const data = {
    title: "퀴즈 설명",
    contents: [
      {
        id: 1,
        content: "퀴즈 시작 버튼을 누르시면 퀴즈 풀기를 시작할 수 있습니다.",
      },
      {
        id: 2,
        content: "오답 노트 버튼을 누르시면 기록했던 내역을 볼 수 있습니다.",
      },
      { id: 3, content: "퀴즈의 보기 문항은 총 4개 입니다." },
      {
        id: 4,
        content: "답안을 선택하면 맞았는지 틀렸는지 확인이 가능합니다.",
      },
      {
        id: 5,
        content: "다음 문제 버튼을 누르시면 다음 문항으로 이동합니다.",
      },
      {
        id: 6,
        content:
          "모든 문항을 다 풀면 소요시간, 정답/오답에 대한 정보를 볼 수 있습니다.",
      },
      {
        id: 7,
        content:
          "다시 풀기, 오답 노트 기능을 누르면 처음부터 문제를 다시 풀거나 오답 노트를 작성할 수 있습니다.",
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
};

export default Home;
