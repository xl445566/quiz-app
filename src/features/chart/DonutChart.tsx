import type { NextPage } from "next";
import { DonutChartProps } from "../../types/index";

import styled from "styled-components";

const Article = styled.article`
  width: 200px;
  height: 200px;
`;

const DonutChart: NextPage<DonutChartProps> = ({
  time,
  correctQuestions,
  incorrectQuestions,
}) => {
  return (
    <Article>
      <svg viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="var(--light-gray-color)"
          strokeWidth="20"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="25px"
        >
          {time}
        </text>

        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke={
            correctQuestions.length / 10 === 0
              ? "var(--light-gray-color)"
              : "var(--point-color)"
          }
          strokeWidth="20"
          strokeDasharray={`${
            2 * Math.PI * 90 * (correctQuestions.length / 10)
          } ${2 * Math.PI * 90 * (incorrectQuestions.length / 10)}`}
          strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
      </svg>
    </Article>
  );
};

export default DonutChart;
