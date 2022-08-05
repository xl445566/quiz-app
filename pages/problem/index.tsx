import type { NextPage } from "next";
import { ProblemProps } from "../../src/types/index";

import { useState } from "react";
import { useRouter } from "next/router";
import { decode } from "punycode";

const Problem: NextPage<ProblemProps> = ({ problems }) => {
  const router = useRouter();
  const [number, setNumber] = useState<number>(0);

  const handleHomePage = () => {
    router.push("/");
  };

  return (
    <>
      <div>{decodeURI(problems.results[number].question)}</div>
      <br />
      <div>{problems.results[number].correct_answer}</div>
      <div>
        {problems.results[number].incorrect_answers.map(
          (v: string, i: number) => (
            <div key={i}>{v}</div>
          )
        )}
      </div>
      <br />
      <button onClick={handleHomePage}>돌아가기</button>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&type=multiple"
  );
  const data = await response.json();

  return {
    props: {
      problems: data,
    },
  };
};

export default Problem;
