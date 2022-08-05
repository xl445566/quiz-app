import type { NextPage } from "next";
import { InstructionProps } from "../src/types/index";

import styled from "styled-components";
import { useRouter } from "next/router";

import Instrunction from "../src/features/home/Instruction";
import Button from "../src/common/components/Button";

const BottonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20%;
  min-height: 20vh;
`;

const Home: NextPage<InstructionProps> = ({ data }) => {
  const router = useRouter();

  const handleProblemPage = () => {
    router.push("/problem");
  };

  return (
    <>
      <Instrunction data={data} />

      <BottonContainer>
        <Button label="퀴즈 시작" onClick={handleProblemPage} />
      </BottonContainer>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/description");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
