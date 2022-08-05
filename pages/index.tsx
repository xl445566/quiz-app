import type { NextPage } from "next";
import { DescriptionProps } from "../src/types/index";

import styled from "styled-components";
import { useRouter } from "next/router";

import Description from "../src/features/home/Description";
import Button from "../src/common/components/Button";

const BottonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30%;
  min-height: 30vh;
`;

const Home: NextPage<DescriptionProps> = ({ description }) => {
  const router = useRouter();

  const handleProblemPage = () => {
    router.push("/problem");
  };
  return (
    <>
      <Description description={description} />

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
      description: data,
    },
  };
};

export default Home;
