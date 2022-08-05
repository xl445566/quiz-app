import type { NextPage } from "next";
import { ProblemProps } from "../../src/types/index";

import { useState } from "react";
import { useRouter } from "next/router";

import generateRandomIndex from "../../src/common/utils/generateRandomIndex";

const Problem: NextPage<ProblemProps> = ({ problems }) => {
  const router = useRouter();
  const [number, setNumber] = useState<number>(0);

  const handleNextProblem = () => {
    setNumber((number) => number + 1);
  };

  // generateRandomIndex(4)

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

      <button onClick={handleNextProblem}>다음 문제</button>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&type=multiple"
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      problems: data,
    },
  };
};

export default Problem;
